export class BaseState {
    hp: string;
    attack: string;
    defence: string;

    constructor(hp: string, attack: string, defence: string){
        this.hp = hp;
        this.attack = attack;
        this.defence = defence;
    }
}
