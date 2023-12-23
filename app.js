'use strict'

const compareArr = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

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
            console.log(line, "LINE!!!")
            const numbersInLine = line.match(/\d+/g);
                if(numbersInLine[0] === numbersInLine[numbersInLine.length-1]){
                    newArray.push(numbersInLine[0]+numbersInLine[0]);
                }
                else {
                    newArray.push(numbersInLine[0]+numbersInLine[numbersInLine.length-1])
                }   
            
        });
        
        const sum = newArray.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
        console.log(`Numbers from line: ${newArray} \n The summary of these are: ${sum}`)

    }
    catch(e){
        console.log("Whuppssss", e)
    }
}

// getNumbersFromLines()

async function getWordsFromArray(compareArr) {
try {
    const readTxt = await readFromTxtFile();
    const lines = readTxt.split('\n');


    const result = Object.keys(compareArr).every(substring =>
        lines.some(element => element.includes(substring))
        );
        console.log(result)

        const isFirstElementMatched = Object.keys(compareArr).some(substring => lines[0].includes(substring))
        console.log(isFirstElementMatched)
        // console.log(line.includes(compareArr))

} catch (e) {
    console.log("This is an Error", e)
}
}


const getEntriesFromObject = function (compareArr){
    let example = "twotestda2taon3esix"
    for(const key in compareArr) {
        if(compareArr.hasOwnProperty(key)){
            const regex = new RegExp(key, 'g');
            example = example.replace(regex, compareArr[key])
        }
    }

    console.log(example)
}

getEntriesFromObject(compareArr)




