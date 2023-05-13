import {IDragon, IDragonModel} from '../@types/dragons';
import {getRandBetween} from '../utils/number';
const attackRegExp = /^(\d+)?d(\d+)(\+(\d+))?$/i;

export default class Dragon implements IDragonModel {
	protected parsedAttack?: IParsedAttack;

	constructor(protected dragon: IDragon) {
	}

	attack(): number {
		const parsedAttack = this.getParsedAttack();

		let result = 0;
		for (let i = 1; i <= parsedAttack.numberOfRolls; i++) {
			let amount = getRandBetween(1, parsedAttack.maxValue);
			amount += parsedAttack.modifier;
			result += amount;
		}

		return result;
	}

	getDragon() {
		return this.dragon;
	}

	getParsedAttack(): IParsedAttack {
		if (!this.parsedAttack) {
			const result = this.parseAttack(this.dragon.attack);
			if (!result) {
				throw new Error(`Cant parse attack of "${this.dragon.name}"`);
			}

			this.parsedAttack = result;
		}

		return this.parsedAttack;
	}

	parseAttack(attack: string): IParsedAttack|false {
		const result = attack.match(attackRegExp);

		if (!result) {
			return false;
		}

		return {
			numberOfRolls: result[1] ? parseInt(result[1]) : 1,
			maxValue: parseInt(result[2]),
			modifier: result[4] ? parseInt(result[4]) : 0
		};
	}
}

export interface IParsedAttack {
	numberOfRolls: number,
	maxValue: number,
	modifier: number
}