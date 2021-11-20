const { expect } = require('@jest/globals');
const {encodeCeasar, decodeCeasar, encodeDecodeAtbash, encodeROT8, decodeROT8, choiceOfCipher} = require('./functions.js');


    describe('Check of defining encodeCeasar function', () => {
        
        test('Test for encodeCeasar', () => {
            expect(encodeCeasar).toBeDefined();
            expect(encodeCeasar("AB")).toBe("BC")
        })

        test('Test for decodeCeasar', () => {
            expect(decodeCeasar).toBeDefined();
            expect(decodeCeasar("AB")).toBe("ZA")
        })
    
        test('Test for encodeDecodeAtbash', () => {
            expect(encodeDecodeAtbash).toBeDefined();
            expect(encodeDecodeAtbash("AZ")).toBe("ZA");
        })
    
        test('Test for encodeROT8', () => {
            expect(encodeROT8).toBeDefined();
            expect(encodeROT8("AB")).toBe("IJ")
        })

        test('Test for decodeROT8', () => {
            expect(decodeROT8).toBeDefined();
            expect(decodeROT8("IG")).toBe("AY");
        })

        test('Test for choiceOfCipher', () => {
            expect(choiceOfCipher).toBeDefined();
            expect(choiceOfCipher("C1", "AE")).toBe("BF")
        })

})