import {lifeProgress, changeLifes, progressState, lifeProgressScale} from "./main.js";
import {getClicks} from "./info_logs.js";


export class Selectors {
    constructor(selectors) {
        this.elHP = document.querySelector(`#health-${selectors}`);
        this.elProgress = document.querySelector(`#progressbar-${selectors}`);
    }
}

export class Pokemon extends Selectors{
    constructor({name, hp, type, selectors}) {
        super(selectors);
        this.name = name;
        this.hp = {
            healthDefault:hp,
            damage:hp,
        }
        this.type = type;
        this.remainLifes = null;
        this.counter = 0;
        this.getClick = getClicks ();
    }
    lifeProgressScale() {
        return lifeProgressScale.call(this);
    };
    lifeProgress() {
        return lifeProgress.call(this);
    };
    changeLifes(count = 20, cb) {
        return changeLifes.call(this, count, cb);
    };
    progressState () {
        return progressState.call(this);
    };
}

export const player1 = new Pokemon({
    name: 'Pikachu',
    hp: 200,
    type: 'electric',
    selectors: 'character'
})

export const player2 = new Pokemon({
    name: 'Charmander',
    hp: 200,
    type: 'fire',
    selectors: 'enemy'
})

