export interface ITask {
	getSolution: () => {[key: string]: any},
	output: () => void;
}