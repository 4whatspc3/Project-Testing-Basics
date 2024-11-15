function reverseString(word){
    if(typeof word !== "string"){
        return "Not a valid input"
    } else if (word === " " || word.length === 0){
        return "Not a valid input"
    }

    const finalString = word.split("").reverse().join("");

    return finalString
}

export default reverseString;