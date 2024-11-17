const calculator = {
    add : (a, b) => {
        
        if(typeof a === "string" || typeof b === "string"){
            let num1 = Number(a);

            let num2 = Number(b);

            return num1 + num2;
        }

        return a + b;
    },
    subtract : (a, b) => {
        
        if(typeof a === "string" || typeof b === "string"){
            let num1 = Number(a);

            let num2 = Number(b);

            return num1 - num2;
        }

        return a - b;
    },
    divide : (a, b) => {
        
        if(typeof a === "string" || typeof b === "string"){
            let num1 = Number(a);

            let num2 = Number(b);

            return num1 / num2;
        }

        return a / b;
    },
    multiply : (a, b) => {
        
        if(typeof a === "string" || typeof b === "string"){
            let num1 = Number(a);

            let num2 = Number(b);

            return num1 * num2;
        }

        return a * b;
    }
}

export default calculator;