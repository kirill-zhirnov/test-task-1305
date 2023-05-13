import BasicTask from './basicTask';
import {ITask} from '../@types/tasks';

export default class Task1 extends BasicTask implements ITask {
	getSolution() {
		const dragons = Array.from(this.dragons);
		dragons.sort((a, b) => {
			if (a.hitpoints < b.hitpoints) {
				return 1;
			} else if (a.hitpoints > b.hitpoints) {
				return -1;
			}

			return 0;
		});
		const result = dragons.map(({name, hitpoints}) => ({name, hitpoints}));

		return {
			result
		};
	}

	output() {
		const {result} = this.getSolution();

		console.log('------------------ Task 1 ------------------');
		console.log('Who is the strongest dragon?\n');
		result.forEach(({name, hitpoints}) => console.log(`${name}: ${hitpoints}`));
		console.log('\n');
	}
}