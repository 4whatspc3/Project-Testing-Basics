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