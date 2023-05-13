import BasicTask from './basicTask';
import {ITask} from '../@types/tasks';

export default class Task3 extends BasicTask implements ITask {
	getSolution() {
		let sameFlight = true;
		let sameWalk = true;

		let flySpeed: number|undefined, walkSpeed: number|undefined;
		for (const dragon of this.dragons) {
			if ('fly' in dragon.speed) {
				if (flySpeed === undefined) {
					flySpeed = dragon.speed.fly;
				} else if (flySpeed != dragon.speed.fly) {
					sameFlight = false;
				}
			}

			if ('walk' in dragon.speed) {
				if (walkSpeed === undefined) {
					walkSpeed = dragon.speed.walk;
				} else if (walkSpeed != dragon.speed.walk) {
					sameWalk = false;
				}
			}
		}

		return {
			sameFlight, sameWalk
		};
	}

	output() {
		const {sameFlight, sameWalk} = this.getSolution();

		console.log('------------------ Task 3 ------------------');
		console.log(`Same flight speed: ${sameFlight ? 'yes' : 'no'}`);
		console.log(`Same walk speed: ${sameWalk ? 'yes' : 'no'}`);
		console.log('\n');
	}
}