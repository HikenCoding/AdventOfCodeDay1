'use strict'
async function readFromTxtFile(){
    const res = await fetch("test.txt");
    const data = await res.text();
    // console.log(data)
    return data;
}



 async function getNumbersFromLines(){
    try{
        const readTxt = await readFromTxtFile();
        const lines = readTxt.split('\n');
        let newChar;
        let indexOfNumber=[];

        for(let i = 0; i < lines.length; i++){
            for(let j = 0; j<lines[i].length-1; j++){
                console.log(lines[j], lines[i].length-1)
                // newChar =+ lines[i][j]
                // if(typeof newChar === "number")
                // {
                //     indexOfNumber = lines[j];
                //     console.log(indexOfNumber);
                //     containsNumber(indexOfNumber)
                //     console.log(containsNumber(indexOfNumber))
                //     // console.log(lines[j])
                //     // console.log("DAS IST EINE ZAHL!!", j, newChar)
                //     // console.log(indexOfNumber)
                // }
            }
            return indexOfNumber;
        }
    }
    catch(e){
        console.log("Whuppssss", e)
    }
}

function containsNumber(str) {
    const match = str.match(/\d+/g);

    if(match){
        const firstNumber  = parseInt(match[0],10);
        const lastNumber = parseInt(match[match.length-1],10);
        
        return {
            firstNumber: firstNumber,
            lastNumber: lastNumber
    };
}
    else{
        return null;
    }
}

getNumbersFromLines()