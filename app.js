'use strict'
function readFromTxtFile(){
    fetch("test.txt").then(function (res){
        return res.text();
    })
    .then(function (data){
        console.log(data);
    })
}

console.log(readFromTxtFile())
