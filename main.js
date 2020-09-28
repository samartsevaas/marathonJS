const kind = {
    name: 'Pikachu',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-character'),
    elProgress: document.querySelector('#progressbar-character')
}

const enemy = {
    name: 'Charmander',
    healthDefault: 100,
    damage: 100,
    elHP: document.querySelector('#health-enemy'),
    elProgress: document.querySelector('#progressbar-enemy')
}

let btn = document.querySelector('#btn-kick');
btn.addEventListener('click', function(){
    changeLifes(randomCount(30), enemy);
    changeLifes(randomCount(30), kind)
})

function init (){
    lifeProgress(enemy);
    lifeProgress(kind);
    lifeProgressScale(enemy);
    lifeProgressScale(kind);
    randomCount();
}

function progressState(person){
    lifeProgress(person);
    lifeProgressScale(person)
}

function lifeProgress (person){
   person.elHP.innerText = person.healthDefault + '/' + person.damage;
}

function lifeProgressScale (person){
    person.elProgress.style.width = person.damage + "%";
 }

function changeLifes (count, person){
    if (person.damage < count){
        person.damage = 0
        alert (person.name + ' ' + 'проиграл')
        btn.disabled = true
    } else{
        person.damage -=count;
    }

    
    progressState(person);
}

function randomCount (num){
   return Math.ceil(Math.random() * num);
}

init();