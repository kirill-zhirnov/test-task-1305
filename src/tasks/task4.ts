import BasicTask from './basicTask';
import {ITask} from '../@types/tasks';
import Dragon from '../models/dragon';

export default class Task4 extends BasicTask implements ITask {
	getSolution() {
		const result: IAttackSolution[] = [];
		for (const dragon of this.dragons) {
			const model = new Dragon(dragon);
			const attack = model.attack();

			result.push({name: dragon.name, attack});
		}

		return {result};
	}

	output() {
		const {result} = this.getSolution();

		console.log('------------------ Task 4 ------------------');
		result.forEach(({name, attack}) => console.log(`The ${name} deals ${attack} points of damage`));
		console.log('\n');
	}
}



interface IAttackSolution {
	name: string,
	attack: number
}