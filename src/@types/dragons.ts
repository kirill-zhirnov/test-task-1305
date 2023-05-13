export interface IDragon {
	name: string;
	hitpoints: number;
	speed: {
		walk?: number;
		fly?: number;
		swim?: number;
		burrow?: number;
		climb?: number;
	};
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	xp: number;
	attack: string;
}

export interface IDragonModel {
	attack: () => number;
	getDragon: () => IDragon;
}