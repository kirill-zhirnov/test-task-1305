import fs from 'fs';
import {appRegistry} from './registry';
import {IDragon} from '../@types/dragons';

export class Bootstrap {
	constructor(protected rootPath: string) {}

	async run(): Promise<void> {
		if (fs.existsSync(`${this.rootPath}/.env`)) {
			require('dotenv').config();
		}

		appRegistry.setRootPath(this.rootPath);

		const dragons = require(`${this.rootPath}/dragon-data.json`) as IDragon[];
		appRegistry.setDragons(dragons);
	}
}

export async function run(rootPath: string): Promise<void> {
	const bootstrap = new Bootstrap(rootPath);

	return await bootstrap.run();
}