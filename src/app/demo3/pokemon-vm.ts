export class PokemonVM {
    id: string;
    chineseName: string;
    type: string[];
    category: string;
    baseStats: string;

    constructor(id: string, chineseName: string, type: string[], category: string, baseState: string) {
        this.id = id;
        this.chineseName = chineseName;
        this.category = category;
        this.type = type;
        this.baseStats = baseState;
    }
}
