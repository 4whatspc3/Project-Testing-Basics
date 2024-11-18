function analyzeArray (arr) {
    if(checkForString(arr)){
        return "The array supports only numbers"
    } else if(arr.length === 0){
        return null
    }
    
    const length = arr.length;

    const average = (arr.reduce(
        (acc, cur) => (acc + cur), 0
    ))/arr.length;

    const min = mergeSort(arr)[0];

    const max = mergeSort(arr)[arr.length - 1];
    
    return {average, min, max, length};
}

const mergeSort = (arr) => {
    if(arr.length === 1){
        return arr
    }

    let mid = Math.floor(arr.length/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right))
}

const merge = (arr1, arr2) => {
    let combined = [],
        i = 0,
        j = 0;

        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                combined.push(arr1[i])
                i++
            } else {
                combined.push(arr2[j])
                j++
            }
        }

        while(i < arr1.length) {
            combined.push(arr1[i])
            i++
        }

        while(j < arr2.length) {
            combined.push(arr2[j])
            j++
        }

    return combined
}

const checkForString = (arr) => {
    let check;

    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "string"){
            check = true;
        }
    }

    return check
}

export default analyzeArray;