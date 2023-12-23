'use strict'

// const compareArr = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
// };

// async function readFromTxtFile(){
//     const res = await fetch("test.txt");
//     const data = await res.text();
//     console.log(data)
//     return data;
// }



 



// const getEntriesFromObject = async function (compareArr){
//     try {
//     const readTxt = await readFromTxtFile();
//     let examples = readTxt.split('\n');
//     let newArray = [];
//     examples.forEach(example => {
//         for(const key in compareArr) {
//             if(compareArr.hasOwnProperty(key)){
//                 const regex = new RegExp(key, 'g');
//                 example = example.replace(regex, parseFloat(compareArr[key]))
//                 console.log(example, "OLD ONE")
//             }
//         }
//         const numbersInLine = example.match(/([+-]?\d+)/g);
//         console.log(numbersInLine, "NUMBERS IN LINEEE")

//         if(numbersInLine[0] === numbersInLine[numbersInLine.length-1]){
//             newArray.push(numbersInLine[0]+numbersInLine[0]);
//         }
//         else if(numbersInLine[0] !== numbersInLine[numbersInLine.length-1]){
//             newArray.push(numbersInLine[0]+numbersInLine[numbersInLine.length-1])
//         }   

        
//     });
//     const sum = newArray.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
//     console.log(`Numbers from line: ${newArray} \n The summary of these are: ${sum}`)

//     } catch (e) {
//         console.log("THIS IS A FREAKING ERROR", e)
//     }
    
// }

// getEntriesFromObject(compareArr)


let fs = require('fs');
let input= fs.readFileSync('test.txt').toString();

let total = 0;

        for(let line of input.split('\n')) {
            const numbers = line.split('').filter(el => !isNaN(parseInt(el)));
            total += parseInt(`${numbers[0]}${numbers[numbers.length-1]}`);
        }

        
        console.log(total)
