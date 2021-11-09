const alphabet = require('./data');
const {encodeCeasar, decodeCeasar, encodeROT8, decodeROT8, encodeDecodeAtbash} = require('./functions');
const fs = require('fs');
const process = require('process');

let str = '';
console.log(process.argv)

const readStream = fs.createReadStream('./solution/input.txt');
const writeStream = fs.createWriteStream('./solution/output.txt');

readStream.on('data', (chunk) => {
    str += decodeROT8(chunk.toString());
    writeStream.write(str);
})

readStream.on('error', (error) => {
    console.log(error.stack);
    writeStream.write(`Result with error ${error.stack}`)
})
// console.log(alphabet)
// console.log('A','A'.charCodeAt(0), 'Z', 'Z'.charCodeAt(0), 'a', 'a'.charCodeAt(0), 'z', 'z'.charCodeAt(0), 'probel', ' '.charCodeAt(0), '_', '_'.charCodeAt(0));



// let str = encodeCeasar('sjsffgjkhefgj');
// let str2 = decodeCeasar(str);

// console.log(str, '      ', str2)