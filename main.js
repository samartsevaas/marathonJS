const character = {
    name: 'Pikachu',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-character'),
    elProgress: document.querySelector('#progressbar-character'),
    lifeProgressScale: lifeProgressScale,
    lifeProgress: lifeProgress,
    changeLifes: changeLifes,
    progressState: progressState
}

const enemy = {
    name: 'Charmander',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-enemy'),
    elProgress: document.querySelector('#progressbar-enemy'),
    lifeProgressScale: lifeProgressScale,
    lifeProgress: lifeProgress,
    changeLifes: changeLifes,
    progressState: progressState
}

let btn = document.querySelector('#btn-kick');
btn.addEventListener('click', function(){
    character.changeLifes(randomCount(30));
    enemy.changeLifes(randomCount(30));
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
    this.elProgress.style.width = this.damage + "%";
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