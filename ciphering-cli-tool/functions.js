function encodeCeasar(text) {
    let temp = [...text];
    temp = temp.map((el, ind) => {
        if(el === 'Z') {
            return 'A';
        } else if (el === 'z') {
            return 'a';
        } else if (65 <= el.charCodeAt(0) && el.charCodeAt(0) < 90) {
            return String.fromCharCode(el.charCodeAt(0) + 1)
        } else if (97 <= el.charCodeAt(0) && el.charCodeAt(0) < 122) {
            return String.fromCharCode(el.charCodeAt(0) + 1)
        } else {
            return el;
        }
    })

    return temp.join('')
}

function decodeCeasar(text) {
    let temp = [...text];
    temp = temp.map((el, ind) => {
        if(el === 'A') {
            return 'Z';
        } else if (el === 'a') {
            return 'z';
        } else if (65 < el.charCodeAt(0) && el.charCodeAt(0) <= 90) {
            return String.fromCharCode(el.charCodeAt(0) - 1)
        } else if (97 < el.charCodeAt(0) && el.charCodeAt(0) <= 122) {
            return String.fromCharCode(el.charCodeAt(0) - 1)
        } else {
            return el;
        }
    })

    return temp.join('')
}

function encodeDecodeAtbash(text) {
    let temp = [...text];
    temp = temp.map((el, ind) => {
        if (65 <= el.charCodeAt(0) && el.charCodeAt(0) <= 90) {
            return String.fromCharCode(90 - el.charCodeAt(0) + 65)
        } else if (97 <= el.charCodeAt(0) && el.charCodeAt(0) <= 122) {
            return String.fromCharCode(122 - el.charCodeAt(0) + 97)
        } else {
            return el;
        }
    })

    return temp.join('');
}

function encodeROT8(text) {
    let temp = [...text];
    temp = temp.map((el, ind) => {
        if (65 <= el.charCodeAt(0) && el.charCodeAt(0) <= 90) {
            if(el.charCodeAt(0) <= 82) {
                return String.fromCharCode(el.charCodeAt(0) + 8)
            } else {
                return String.fromCharCode(8 - (90 - el.charCodeAt(0)) + 64)
            }
        } else if (97 <= el.charCodeAt(0) && el.charCodeAt(0) <= 122) {
            if(el.charCodeAt(0) <= 114) {
                return String.fromCharCode(el.charCodeAt(0) + 8)
            } else {
                return String.fromCharCode(8 - (122 - el.charCodeAt(0)) + 96)
            }
        }
        return el;
    })

    return temp.join('');
}

function decodeROT8(text) {
    let temp = [...text];
    temp = temp.map((el, ind) => {
        if (65 <= el.charCodeAt(0) && el.charCodeAt(0) <= 90) {
            if(el.charCodeAt(0) >= 73) {
                return String.fromCharCode(el.charCodeAt(0) - 8)
            } else {
                return String.fromCharCode(90 - ( 7 - el.charCodeAt(0) + 65))
            }
        } else if (97 <= el.charCodeAt(0) && el.charCodeAt(0) <= 122) {
            if(el.charCodeAt(0) >= 105) {
                return String.fromCharCode(el.charCodeAt(0) - 8)
            } else {
                return String.fromCharCode(122 - ( 7 - el.charCodeAt(0) + 97))
            }
        }
        return el;
    })

    return temp.join('');
}

function choiceOfCipher(str, chunk) {
    let temp;
    switch(str) {
        case 'C0':
            temp = decodeCeasar(chunk);
        break;
        case 'C1':
            temp = encodeCeasar(chunk);
        break;
        case 'R0':
            temp = decodeROT8(chunk);
        break;
        case 'R1':
            temp = encodeROT8(chunk);
        break;
        case 'A':
            temp = encodeDecodeAtbash(chunk);
        break;
        default :
            readStream.emit('error', (err) => {
                console.log('error', err.stack)
            });
            process.exit('1');
    }
    return temp;

}

module.exports = {encodeCeasar, decodeCeasar, encodeDecodeAtbash, encodeROT8, decodeROT8, choiceOfCipher};