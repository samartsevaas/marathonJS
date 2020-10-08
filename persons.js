import {lifeProgress, changeLifes, progressState, lifeProgressScale} from "./main.js";
import {getClicks} from "./info_logs.js";
import {pokemons} from "./pokemons.js"

const pikachu = pokemons.find(item => item.name === 'Pikachu');


export class Selectors {
    constructor(selectors) {
        this.elHP = document.querySelector(`#health-${selectors}`);
        this.elProgress = document.querySelector(`#progressbar-${selectors}`);
    }
}

export class Pokemon extends Selectors{
    constructor({name, hp, type, selectors,attacks}) {
        super(selectors);
        this.name = name;
        this.hp = {
            healthDefault:hp,
            damage:hp,
        }
        this.type = type;
        this.remainLifes = null;
        this.counter = 0;
        this.attacks = attacks;
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
    ...pikachu,
    selectors: 'player1'
})

export const player2 = new Pokemon({
    name: 'Charmander',
    hp: 200,
    type: 'fire',
    selectors: 'player2'
})

function getClickInfo(btn){
    let innerText = btn.innerText;
    return innerText = `${innerText}`;
}


const control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = item.name;
    const btnCount = getClicks(item.maxCount);
    btn.addEventListener('click', () => {
        console.log(btnCount());
    })
    control.appendChild(btn)
})