const calculator = {
    add : (a, b) => {
        
        if(typeof a === "string" || typeof b === "string"){
            let num1 = Number(a);

            let num2 = Number(b);

            return num1 + num2;
        }

        return a + b;
    },
    subtract : (a, b) => a - b,
    divide : (a, b) => a / b,
    multiply : (a, b) => a * b
}

export default calculator;