function encodeCeasar(text) {
    let temp = [...text];
    console.log(temp);
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
    console.log(temp.join(''));
    return temp.join('')
}

function decodeCeasar(text) {
    let temp = [...text];
    console.log(temp);
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
    console.log(temp.join(''));
    return temp.join('')
}

module.exports = {encodeCeasar, decodeCeasar};