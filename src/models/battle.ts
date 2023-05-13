import {IDragon, IDragonModel} from '../@types/dragons';

export default class Battle {
	constructor(protected dragon1: IDragonModel, protected dragon2: IDragonModel) {}

	fight(): IDragon|null {
		let hitPoints1 = this.dragon1.getDragon().hitpoints;
		let hitPoints2 = this.dragon2.getDragon().hitpoints;

		while (hitPoints1 > 0 && hitPoints2 > 0) {
			const attack1 = this.dragon1.attack();
			hitPoints2 -= attack1;

			const attack2 = this.dragon2.attack();
			hitPoints1 -= attack2;
		}

		if (hitPoints1 > hitPoints2) {
			return this.dragon1.getDragon();
		} else if (hitPoints1 < hitPoints2) {
			return this.dragon2.getDragon();
		}

		return null;
	}
}