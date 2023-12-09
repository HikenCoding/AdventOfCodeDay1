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

        for(let i = 0; i < lines.length; i++){
            for(let j = 0; j< lines[i].length-1; j++){
                newChar =+ lines[i][j]
                if(typeof newChar === "number")
                {
                    console.log("DAS IST EINE ZAHL!!", newChar)
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
