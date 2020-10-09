export function randomCount (max, min = 0){
    let num = max-min;
    return Math.ceil(Math.random() * num + min);
 }


 