import {IDragon} from '../@types/dragons';

export class Registry {
	protected rootPath?: string;
	protected dragons?: IDragon[];

	setRootPath(rootPath: string): Registry {
		this.rootPath = rootPath;
		return this;
	}

	getRootPath(): string {
		if (!this.rootPath)
			throw new Error('rootPath is not inited');

		return this.rootPath;
	}

	setDragons(dragons: IDragon[]): Registry {
		this.dragons = dragons;
		return this;
	}

	getDragons(): IDragon[] {
		if (!this.dragons)
			throw new Error('dragons is not inited');

		return this.dragons;
	}
}

export const appRegistry = new Registry();