import BasicTask from './basicTask';
import {ITask} from '../@types/tasks';

export default class Task2 extends BasicTask implements ITask {
	getSolution() {
		const sumSpeed = this.dragons
			.reduce((accumulator, {speed}) => accumulator + (speed.fly || 0), 0)
		;

		//not sure if it's a right formula for calculating "combined speed"
		const result = this.dragons.length > 0
			? Math.round(sumSpeed / this.dragons.length * 100) / 100
			: 0;

		return {
			result
		};
	}

	output() {
		const {result} = this.getSolution();

		console.log('------------------ Task 2 ------------------');
		console.log(`The combined flying speed of the dragons is ${result}`);
		console.log('\n');
	}
}