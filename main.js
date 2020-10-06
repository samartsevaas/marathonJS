import {player1, player2} from "./persons.js";
import {randomCount} from "./utils.js";
import {getLogs} from "./info_logs.js";
import {END_COUNT} from "./consts.js";

let btnCharacter = document.querySelector('#btn-character');
let btnEnemy = document.querySelector('#btn-enemy');
let logInfo = document.querySelector('#logs');

btnCharacter.addEventListener('click', function(){
    const {changeLifes: changeLifesEnemy} = player2;
    changeLifesEnemy.call(player2,randomCount(80), function(count){
        console.log('Some change after change HP', count);
        console.log(getLogs(player1,player2,count));
    });
})

btnEnemy.addEventListener('click', function(){
    const {changeLifes: changeLifesCharacter} = player1;
    changeLifesCharacter.call(player1,randomCount(80), function(count){
        console.log('Some change after change HP', count);
        console.log(getLogs(player1,player2,count));
    });
})

function init (){
    progressState.call(player2);
    progressState.call(player1);
    randomCount();
}

export function progressState(){
    this.lifeProgress();
    this.lifeProgressScale()
}

export function lifeProgress (){
    this.remainLifes = this.hp.healthDefault + '/' + this.hp.damage;
   this.elHP.innerText = this.remainLifes;
}


export function lifeProgressScale (){
    let result = this.hp.damage/this.hp.healthDefault * 100;
    this.elProgress.style.width = result + "%";
 }

export function changeLifes (count, cb){
    this.counter = this.getClick();
    const isEnemy = this === player2;
    if (this.hp.damage < count || this.counter >= END_COUNT){
        this.hp.damage = 0
        alert (this.name + ' ' + 'проиграл')
        btnEnemy.disabled = true;
        btnCharacter.disabled = true
    } else{
        this.hp.damage -=count;
    }
    this.progressState();
    cb && cb (count);
    const log = isEnemy ? getLogs (this, player1, count) : getLogs(this, player2, count);
}

init();