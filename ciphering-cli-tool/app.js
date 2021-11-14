const {encodeCeasar, decodeCeasar, encodeROT8, decodeROT8, encodeDecodeAtbash, choiceOfCipher} = require('./functions');
const fs = require('fs');
const process = require('process');

let str = '';
let argsArray;
let i = 0;

argsArray = process.argv[2] === '-c' ? process.argv[3].split('-') : null;

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

    readStream.on('data', (chunk) => {
        str += chunk;
    })

readStream.on('end', () => {

    while(i < argsArray.length) {
        str = choiceOfCipher(argsArray[i], str)
        i++;
    }

    writeStream.write(str);
    str = '';
    i = 0;
})

readStream.on('error', (error) => {
    console.log(error.stack);
    process.exit('1');
})

writeStream.on('error', (error) => {
    console.log(error.stack);
    process.exit('1');
})
