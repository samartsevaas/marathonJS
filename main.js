const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';


function getCount (row){
    let count = 0;
    for (let i=0; i<row.length;i++){
        if (row.charAt(i) == 'а'){
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

console.log(getRow(firstRow,secondRow));