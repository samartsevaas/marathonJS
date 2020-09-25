const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

let letter = prompt('Введите букву');

function getCount (row){
    let count = 0;
    for (let i=0; i<row.length;i++){
        if (row.charAt(i) === letter){
            count++
        }
    }
    return count
}


function getRow(){
   let firstCount = getCount(firstRow);
   let secondCount = getCount(secondRow);

   return firstCount > secondCount ? firstRow : secondRow
}

alert(getRow(firstRow,secondRow));