import analyzeArray from "./analyzeArray";


test('The returned object has the property "average"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty("average")
})

test('The returned object has the pair "average : 4"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        average : 4
    }))
})

test('The returned object has the property "length"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty('length')
})

test('The returned object has the pair "length : 6"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        length : 6
    }))
})

test('The returned object has the property "min"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty("min")
})

test('The returned object has the pair "min : 1"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        min : 1
    }))
})

test('The returned object has the property "max"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toHaveProperty("max")
})

test('The returned object has the pair "max : 8"', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.objectContaining({
        max : 8
    }))
})

test('Everything matches', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('Array with non-number', () => {
    expect(analyzeArray([1,8,3,4,2,"6"])).toBe("The array supports only numbers");
});

test('Array-like object (string)', () => {
    expect(analyzeArray('12345')).toBe("The array supports only numbers");
});

test('[] to be null', () => {
    expect(analyzeArray([])).toBeNull();
})