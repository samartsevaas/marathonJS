import {END_COUNT} from "./consts.js";
import {randomCount} from "./utils.js";

export const getClicks = (endCount = END_COUNT) => {
    let clicks = 0;
    return () => {
        if(clicks < endCount) {
            clicks++;
        }
        return clicks;
    };
}


export function getLogs(firstPerson, secondPerson, count){
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
    
    export class ManageGame {
        constructor(name) {
            this.name = name;
        }
    
        start = () => {
            console.log('start', name);
        }
    
        stop = () => {
            console.log('stop', name);
        }
    
        reset= () => {
            console.log('reset', name);
        }
    } 