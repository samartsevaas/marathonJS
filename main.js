function btn () {
    re
}

const character = {
    name: 'Pikachu',
    healthDefault: 200,
    damage: 200,
    elHP: document.querySelector('#health-character'),
    elProgress: document.querySelector('#progressbar-character'),
    lifeProgressScale,
    lifeProgress,
    changeLifes,
    progressState
}

const enemy = {
    name: 'Charmander',
    healthDefault: 200,
    damage: 200,
    elHP: document.querySelector('#health-enemy'),
    elProgress: document.querySelector('#progressbar-enemy'),
    lifeProgressScale,
    lifeProgress,
    changeLifes,
    progressState
}

let btn = document.querySelector('#btn-kick');
btn.addEventListener('click', function(){
    const {changeLifes: changeLifesCharacter} = character;
    const {changeLifes: changeLifesEnemy} = enemy;
    changeLifesCharacter.call(character,randomCount(30));
    changeLifesEnemy.call(enemy,randomCount(30));
})

function init (){
    progressState.call(enemy);
    progressState.call(character);
    randomCount();
}

function progressState(){
    this.lifeProgress();
    this.lifeProgressScale()
}

function lifeProgress (){
   this.elHP.innerText = this.healthDefault + '/' + this.damage;
}

function lifeProgressScale (){
    let result = this.damage/this.healthDefault * 100;
    this.elProgress.style.width = result + "%";
 }

function changeLifes (count){
    if (this.damage < count){
        this.damage = 0
        alert (this.name + ' ' + 'проиграл')
        btn.disabled = true
    } else{
        this.damage -=count;
    }
    this.progressState();
}

function randomCount (num){
   return Math.ceil(Math.random() * num);
}

init();