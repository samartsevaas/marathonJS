let btnCharacter = document.querySelector('#btn-character');
let btnEnemy = document.querySelector('#btn-enemy');
let logInfo = document.querySelector('#logs');

const END_COUNT = 2;


const getClicks = (endCount = END_COUNT) => {
    let clicks = 0;
    return () => {
        if(clicks < endCount) {
            console.log(`Осталось: ${endCount - clicks}`);
            clicks++;
        }
        return clicks;
    };
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
    progressState,
    remainLifes: null,
    counter: 0,
    getClick: getClicks(),
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
    progressState,
    remainLifes: null,
    counter: 0,
    getClick: getClicks(),
}

btnCharacter.addEventListener('click', function(){
    const {changeLifes: changeLifesEnemy} = enemy;
    changeLifesEnemy.call(enemy,randomCount(80));
})

btnEnemy.addEventListener('click', function(){
    const {changeLifes: changeLifesCharacter} = character;
    changeLifesCharacter.call(character,randomCount(80));
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
    this.remainLifes = this.healthDefault + '/' + this.damage;
   this.elHP.innerText = this.remainLifes;
}


function lifeProgressScale (){
    let result = this.damage/this.healthDefault * 100;
    this.elProgress.style.width = result + "%";
 }

function changeLifes (count){
    this.counter = this.getClick();
    const isEnemy = this === enemy;
    if (this.damage < count || this.counter >= END_COUNT){
        this.damage = 0
        alert (this.name + ' ' + 'проиграл')
        btnEnemy.disabled = true;
        btnCharacter.disabled = true
        console.log(`У ${enemy.name} было: ${enemy.counter} кликов`);
        console.log(`У ${character.name} было: ${character.counter} кликов`);
    } else{
        this.damage -=count;
    }
    this.progressState();
    const log = isEnemy ? getLogs (this, character, count) : getLogs(this, enemy, count);

        let p = document.createElement('p');
        p.innerHTML = `${log}`;
        logInfo.insertBefore(p,logInfo.children[0]);
}


function randomCount (num){
   return Math.ceil(Math.random() * num);
}

init();

function getLogs(firstPerson, secondPerson, count){
const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}`,
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes} `,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}.`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Урон понес: ${firstPerson.name}, урон:${count}, оставшиеся жизни: ${firstPerson.remainLifes}`
];

    return logs[randomCount(logs.length) -1];

}