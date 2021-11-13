const alphabet = require('./data');
const {encodeCeasar, decodeCeasar, encodeROT8, decodeROT8, encodeDecodeAtbash, choiceOfCipher} = require('./functions');
const fs = require('fs');
const process = require('process');

let str = '';
let argsArray;
let i = 0;

argsArray = process.argv[2] === '-c' ? process.argv[3].split('-') : null;
console.log(process.argv)
console.log(argsArray)

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

    readStream.on('data', (chunk) => {
        str += chunk;
    })

readStream.on('end', () => {
    console.log("Before while str", str)
    while(i < argsArray.length) {
        str = choiceOfCipher(argsArray[i], str)
        // switch(argsArray[i]) {
        //     case 'C0':
        //         console.log(" C0 - choiceOfCipher");
        //         str = decodeCeasar(str);
        //     break;
        //     case 'C1':
        //         console.log(" C1 - choiceOfCipher");
        //         str = encodeCeasar(str);
        //     break;
        //     case 'R0':
        //         console.log(" R0 - choiceOfCipher");
        //         str = decodeROT8(str);
        //     break;
        //     case 'R1':
        //         console.log(" R1 - choiceOfCipher");
        //         str = encodeROT8(str);
        //     break;
        //     case 'A':
        //         console.log(" A - choiceOfCipher");
        //         str = encodeDecodeAtbash(str);
        //     break;
        //     default :
        //         readStream.emit('error', (err) => {
        //             console.log('error', err.stack)
        //         })       
        // }
        
        i++;
    }
    console.log("After while str", str)
    writeStream.write(str);
    str = '';
    i = 0;
})

// readStream2.on('end', () => {
//     writeStream.write(str);
//     str = ''
// })

readStream.on('error', (error) => {
    console.log(error.stack);
    // writeStream.write(`Result with error ${error.stack}`)
})


// console.log(alphabet)
// console.log('A','A'.charCodeAt(0), 'Z', 'Z'.charCodeAt(0), 'a', 'a'.charCodeAt(0), 'z', 'z'.charCodeAt(0), 'probel', ' '.charCodeAt(0), '_', '_'.charCodeAt(0));



// let str = encodeCeasar('sjsffgjkhefgj');
// let str2 = decodeCeasar(str);

// console.log(str, '      ', str2)