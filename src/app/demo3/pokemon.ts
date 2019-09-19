import { BaseState } from './base-state';
import { PokemonVM } from './pokemon-vm';

export class Pokemon {
    id: number;
    chineseName: string;
    englishName: string;
    height: number;
    weight: number;
    abilities: string;
    catchRate: number;
    baseStats: BaseState;
    type: string[];
    experience: number;
    category: string;

    constructor(id: number, chineseName: string, type: string[], category: string, baseState: BaseState) {
        this.id = id;
        this.chineseName = chineseName;
        this.type = type;
        this.category = category;
        this.baseStats = baseState;
    }

    padZero(length: number) {
        const output = '000' + this.id;
        return output.substr(output.length - length);
    }

    toPokemonVM() {
        const id = this.padZero(3);
        const base = this.baseStats.hp + '/' + this.baseStats.attack + '/' + this.baseStats.defence;
        console.log(base);
        return new PokemonVM(id, this.chineseName, this.type, this.category, base);
    }
}
