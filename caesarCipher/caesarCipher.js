function caesarCipher(word, sf){
    //sf is the abbreviation for shift factor

    if(typeof word !== "string"){
        return "Not a valid input"
    } else if (sf === undefined){
        return "Shift factor is undefined"
    }

    const cipherLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
                         "j", "k", "l", "m", "n", "o", "p", "q", "r",
                         "s", "t", "u", "v", "w", "x", "y", "z", "a",
                         "b", "c"];
    
    const cipherUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", 
                         "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                         "S", "T", "U", "V", "W", "X", "Y", "Z", "A", 
                         "B", "C"];

    const arrWord = word.split("");

    const arrCipher = [];

    for(let i=0; i < arrWord.length; i++){

        if(!specialChar(arrWord[i]) && !numbers(arrWord[i])){

            if(!upperCase(arrWord[i])){

                for(let j=0; j < cipherLower.length; j++){

                    if(arrWord[i] === cipherLower[j]){

                        arrCipher.push(cipherLower[j+sf])
                    }
                }
            } else {    

                for(let k=0; k < cipherUpper.length; k++){

                    if(arrWord[i] === cipherUpper[k]){

                        arrCipher.push(cipherUpper[k+sf])
                    }
                }
            }

        } else {

            arrCipher.push(arrWord[i])
        }

    }

    const cipher = arrCipher.join("");

    return cipher;
}

function upperCase(input) {
    return /[A-Z]/.test(input);
}

function specialChar(input) {
    return /[ ,#.?!@$%^&*-]/.test(input);
}

function numbers(input) {
    return /\d/.test(input);
}

export default caesarCipher;