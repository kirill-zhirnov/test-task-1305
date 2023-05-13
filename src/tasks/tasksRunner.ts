import Task1 from './task1';
import {appRegistry} from '../components/registry';
import Task2 from './task2';
import Task3 from './task3';
import Task4 from './task4';
import Task5 from './task5';

export function runAllTasks() {
	runTask1();
	runTask2();
	runTask3();
	runTask4();
	runTask5();
}

export function runTask1() {
	const dragons = appRegistry.getDragons();

	try {
		const task = new Task1(dragons);
		task.output();
	} catch (e) {
		console.error('Error in Task1:', e);
	}
}
export function runTask2() {
	const dragons = appRegistry.getDragons();

	try {
		const task = new Task2(dragons);
		task.output();
	} catch (e) {
		console.error('Error in Task2:', e);
	}
}

export function runTask3() {
	const dragons = appRegistry.getDragons();

	try {
		const task = new Task3(dragons);
		task.output();
	} catch (e) {
		console.error('Error in Task3:', e);
	}
}

export function runTask4() {
	const dragons = appRegistry.getDragons();

	try {
		const task = new Task4(dragons);
		task.output();
	} catch (e) {
		console.error('Error in Task4:', e);
	}
}

export function runTask5() {
	const dragons = appRegistry.getDragons();

	try {
		const task = new Task5(dragons);
		task.output();
	} catch (e) {
		console.error('Error in Task5:', e);
	}
}