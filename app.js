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
        let newChar;
        let indexOfNumber=[];

        for(let i = 0; i < lines.length; i++){
            for(let j = 0; j< lines[i].length-1; j++){
                newChar =+ lines[i][j]
                if(typeof newChar === "number")
                {
                    indexOfNumber = j
                    console.log("DAS IST EINE ZAHL!!", j, newChar)
                    console.log(indexOfNumber)
                }
            }
            return newChar;
        }
    }
    catch(e){
        console.log("Whuppssss", e)
    }
}
getNumbersFromLines()
