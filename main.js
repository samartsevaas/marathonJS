import {player1, player2, control, Selectors} from "./persons.js";
import {randomCount} from "./utils.js";
import {getClicks, getLogs, ManageGame} from "./info_logs.js";
import {END_COUNT} from "./consts.js";

const startGameBtn = document.getElementById('btn-start');
const stopGameBtn = document.getElementById('btn-stop');
const resetGameBtn = document.getElementById('btn-reset');
const controlArray = control.querySelectorAll('.button');

let game = new ManageGame ({
    name: "game"
})

startGameBtn.addEventListener('click', function () {
    game.start();
});

stopGameBtn.addEventListener('click', function () {
    game.stop();
});

resetGameBtn.addEventListener('click', function () {
    game.reset();
});

// let btnCharacter = document.querySelector('#btn-player1');
// let btnEnemy = document.querySelector('#btn-player2');


// btnCharacter.addEventListener('click', function(){
//     const {changeLifes: changeLifesEnemy} = player2;
//     changeLifesEnemy.call(player2,randomCount(80), function(count){
//         console.log('Some change after change HP', count);
//         console.log(getLogs(player1,player2,count));
//     });
// })

// btnEnemy.addEventListener('click', function(){
//     const {changeLifes: changeLifesCharacter} = player1;
//     changeLifesCharacter.call(player1,randomCount(80), function(count){
//         console.log('Some change after change HP', count);
//         console.log(getLogs(player1,player2,count));
//     });
// })

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
        alert (this.name + ' ' + 'проиграл');
        controlArray.forEach( item => {
            item.disabled = true;
        })
    } else{
        this.hp.damage -=count;
    }

    console.log(typeof(this.hp.damage))
    if (this.hp.damage < 60  && this.hp.damage > 20 ){
        this.elProgress.classList.add('low');
    } else if (this.hp.damage < 20) {
        this.elProgress.classList.remove('low');
        this.elProgress.classList.add('critical');
    }else {
        this.elProgress.classList.remove('low');
        this.elProgress.classList.remove('critical');
    }

    this.progressState();
    cb && cb (count);
    const log = isEnemy ? getLogs (this, player1, count) : getLogs(this, player2, count);
}


init();