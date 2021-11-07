const alphabet = require('./data');
const {encodeCeasar, decodeCeasar} = require('./functions');

console.log(alphabet)
console.log('A','A'.charCodeAt(0), 'Z', 'Z'.charCodeAt(0), 'a', 'a'.charCodeAt(0), 'z', 'z'.charCodeAt(0), 'probel', ' '.charCodeAt(0), '_', '_'.charCodeAt(0));



let str = encodeCeasar('sjsffgjkhefgj');
let str2 = decodeCeasar(str);

console.log(str, '      ', str2)