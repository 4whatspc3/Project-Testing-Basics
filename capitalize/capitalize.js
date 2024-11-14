function firstToCapital(word) {
    if(typeof word !== "string" || numbers(word)){
        return 'Not a valid input';

    } else if (word === " " || word.length === 0){
        return 'Not a valid input';

    } else {
        const oldWord = word.split("");

        const onlySpecial = oldWord.filter((char) => !specialChar(char))
  
        if(onlySpecial.length === 0){
            return 'Not a valid input';
        }

        const upperChar = oldWord[0].toUpperCase();
    
        let finalWord = upperChar;
    
        for(let i=1; i < oldWord.length; i++){
            finalWord += oldWord[i]
        }
    
        return finalWord
    }
}

function numbers(input) {
    return /\d/.test(input);
}

function specialChar(input) {
    return /[#.?!@$%^&*-]/.test(input);
}

export default firstToCapital;
