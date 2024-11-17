import calculator from "./calculator";

describe('Addition', () => {
    test('add(1, 1) is 2', () => {
        expect(calculator.add(1, 1)).toBe(2);
    });
    
    test('add(-1, 1) is 0', () => {
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('add(1, 0) is 1', () => {
        expect(calculator.add(1, 0)).toBe(1);
    });

    test('add(0, 0) is 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('add(0.1, 0.2) is close to 0.3', () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('add(2/5, 2/5) is close to 0.8', () => {
        expect(calculator.add(2/5 , 2/5)).toBeCloseTo(0.8);
    });

    test('add("1", "2") is 3', () => {
        expect(calculator.add("1", "2")).toBe(3);
    })

    test('add("1", 2) is 3', () => {
        expect(calculator.add("1", 2)).toBe(3);
    });

    test('add("bee", "lion") is NaN', () => {
        expect(calculator.add("bee", "lion")).toBe(NaN);
    });

    test('add() is NaN', () => {
        expect(calculator.add()).toBe(NaN);
    });
});

describe('Subtraction', () => {
    test('subtract(1, 1) is 2', () => {
        expect(calculator.subtract(1, 1)).toBe(0);
    });
    
    test('subtract(-1, 1) is 0', () => {
        expect(calculator.subtract(-1, 1)).toBe(-2);
    });

    test('subtract(1, 0) is 1', () => {
        expect(calculator.subtract(1, 0)).toBe(1);
    });

    test('subtract(0, 0) is 0', () => {
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('subtract(0.1, 0.2) is close to 0.3', () => {
        expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    });

    test('subtract(2/5, 2/5) is close to 0.8', () => {
        expect(calculator.subtract(2/5 , 2/5)).toBeCloseTo(0);
    });

    test('subtract("1", "2") is 3', () => {
        expect(calculator.subtract("1", "2")).toBe(-1);
    })

    test('subtract("1", 2) is 3', () => {
        expect(calculator.subtract("1", 2)).toBe(-1);
    });

    test('subtract("bee", "lion") is NaN', () => {
        expect(calculator.subtract("bee", "lion")).toBe(NaN);
    });

    test('subtract() is NaN', () => {
        expect(calculator.subtract()).toBe(NaN);
    });
});

describe('Division', () => {
    test('divide(4, 2) is 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    });
    
    test('divide(-1, 1) is 0', () => {
        expect(calculator.divide(-1, 1)).toBe(-1);
    });

    test('divide(1, 0) is 1', () => {
        expect(calculator.divide(1, 0)).toBe(Infinity);
    });

    test('divide(1, -0) is 1', () => {
        expect(calculator.divide(1, -0)).toBe(-Infinity);
    });

    test('divide(0, 0) is 0', () => {
        expect(calculator.divide(0, 0)).toBe(NaN);
    });

    test('divide(0.1, 0.2) is close to 0.5', () => {
        expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
    });

    test('divide(2/5, 2/5) is close to 1', () => {
        expect(calculator.divide(2/5 , 2/5)).toBeCloseTo(1);
    });

    test('divide("1", "2") is 0.5', () => {
        expect(calculator.divide("1", "2")).toBe(0.5);
    })

    test('divide("1", 2) is 0.5', () => {
        expect(calculator.divide("1", 2)).toBe(0.5);
    });

    test('divide("bee", "lion") is NaN', () => {
        expect(calculator.divide("bee", "lion")).toBe(NaN);
    });

    test('divide("bee", 2) is NaN', () => {
        expect(calculator.divide("bee", 2)).toBe(NaN);
    });

    test('divide(2, "lion") is NaN', () => {
        expect(calculator.divide(2, "lion")).toBe(NaN);
    });

    test('divide() is NaN', () => {
        expect(calculator.divide()).toBe(NaN);
    });
});

describe('Multiplication', () => {
    test('multiply(4, 2) is 8', () => {
        expect(calculator.multiply(4, 2)).toBe(8);
    });
    
    test('multiply(-1, 1) is -1', () => {
        expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('multiply(-1, 11) is 1', () => {
        expect(calculator.multiply(-1, -1)).toBe(1);
    });

    test('multiply(1, 0) is 0', () => {
        expect(calculator.multiply(1, 0)).toBe(0);
    });

    test('multiply(1, -0) is -0', () => {
        expect(calculator.multiply(1, -0)).toBe(-0);
    });

    test('multiply(0, 0) is 0', () => {
        expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('multiply(0.1, 0.2) is close to 0.02', () => {
        expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });

    test('multiply(2/5, 2/5) is close to 0.16', () => {
        expect(calculator.multiply(2/5 , 2/5)).toBeCloseTo(0.16);
    });

    test('multiply("1", "2") is 2', () => {
        expect(calculator.multiply("1", "2")).toBe(2);
    })

    test('multiply("1", 2) is 2', () => {
        expect(calculator.multiply("1", 2)).toBe(2);
    });

    test('multiply("bee", "lion") is NaN', () => {
        expect(calculator.multiply("bee", "lion")).toBe(NaN);
    });

    test('multiply("bee", 2) is NaN', () => {
        expect(calculator.multiply("bee", 2)).toBe(NaN);
    });

    test('multiply(Infinity, 0) is NaN', () => {
        expect(calculator.multiply(Infinity, 0)).toBe(NaN);
    });

    test('multiply(Infinity, Infinity) is Infinity', () => {
        expect(calculator.multiply(Infinity, Infinity)).toBe(Infinity);
    });

    test('multiply(Infinity, 2) is Infinity', () => {
        expect(calculator.multiply(Infinity, 2)).toBe(Infinity);
    });

    test('multiply() is NaN', () => {
        expect(calculator.multiply()).toBe(NaN);
    });
});