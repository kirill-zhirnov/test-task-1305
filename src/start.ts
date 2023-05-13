import {run as bootstrapApp} from './components/bootstrap';
import path from 'path';
import {runAllTasks} from './tasks/tasksRunner';

(async () => {
	await bootstrapApp(path.resolve(__dirname, '../'));
	runAllTasks();
})();