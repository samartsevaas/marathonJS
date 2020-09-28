const kind = {
    name: 'Pikachu',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-character'),
    elProgress: document.querySelector('#progressbar-character'),
    changeLifes(count) { return changeLifes.call(this, count)},
    lifeProgress() { return  lifeProgress.call(this) },
    lifeProgressScale() { return lifeProgressScale.call(this)},
    progressState() {return progressState.call(this)}
}

const enemy = {
    name: 'Charmander',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-enemy'),
    elProgress: document.querySelector('#progressbar-enemy'),
    changeLifes(count) { return changeLifes.call(this, count)},
    lifeProgress() { return  lifeProgress.call(this) },
    lifeProgressScale() { return lifeProgressScale.call(this)},
    progressState() {return progressState.call(this)}
}

let btn = document.querySelector('#btn-kick');
btn.addEventListener('click', function(){
    kind.changeLifes(randomCount(30));
    enemy.changeLifes(randomCount(30));
})

function init (){
    progressState(),
    randomCount();
}

function progressState(){
    kind.lifeProgress();
    enemy.lifeProgress();
    kind.lifeProgressScale(),
    enemy.lifeProgressScale()
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