'use strict'
async function readFromTxtFile(){
    const res = await fetch("test.txt");
    const data = await res.text();
    console.log(data)
    return data;
}

 async function getNumbersFromLines(){
    try{
        const readTxt = await readFromTxtFile();
        const lines = readTxt.split('\n');
        let newArray = [];

        lines.forEach(line => {
            const numbersInLine = line.match(/\d+/g);
            if(numbersInLine){
                if(numbersInLine[0] === numbersInLine[numbersInLine.length-1]){
                    newArray.push(numbersInLine[0]+numbersInLine[0]);
                }
                else {
                    newArray.push(numbersInLine[0]+numbersInLine[numbersInLine.length-1])
                }   
            }
            
        });
        
        const sum = Object.values(newArray).reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        console.log(`Numbers from line: ${newArray} \n The summary of these are: ${sum}`)

    }
    catch(e){
        console.log("Whuppssss", e)
    }
}

getNumbersFromLines()



