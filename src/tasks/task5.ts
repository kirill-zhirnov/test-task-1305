import BasicTask from './basicTask';
import {ITask} from '../@types/tasks';
import Battle from '../models/battle';
import Dragon from '../models/dragon';
import {getRandBetween} from '../utils/number';
import {IDragon} from '../@types/dragons';

export default class Task5 extends BasicTask implements ITask {
	getSolution() {
		const fights: IFightResults[] = [];
		this.dragons.forEach((dragon, index) => {
			const competitor = this.findRandomCompetitor(index);

			const battle = new Battle(new Dragon(dragon), new Dragon(competitor));
			const result = battle.fight();

			fights.push({
				dragon1: dragon.name,
				dragon2: competitor.name,
				winner: result ? result.name : null
			});
		});

		return {fights};
	}

	output() {
		const {fights} = this.getSolution();

		console.log('------------------ Task 5 ------------------');
		for (const fight of fights) {
			console.log(`In a battle between a ${fight.dragon1} and a ${fight.dragon2}, the winner is ${fight.winner || 'nobody'}`);
		}
		console.log('\n');
	}

	findRandomCompetitor(myIndex: number): IDragon {
		const competitors = Array.from(this.dragons);
		competitors.splice(myIndex, 1);

		return competitors[getRandBetween(0, competitors.length - 1)];
	}
}

interface IFightResults {
	dragon1: string,
	dragon2: string,
	winner: string|null
}