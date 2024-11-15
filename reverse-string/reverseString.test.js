import reverseString from "./reverseString";

describe('Reverse a string', () => {
    test('"gorila" should become "alirog"', () => {
        expect(reverseString('gorila')).toEqual('alirog');
    });
    
    test('"gorila ninja" should become "ajnin alirog"', () => {
        expect(reverseString('gorila ninja')).toEqual('ajnin alirog');
    });
    
    test('"gorila ninja" should become "ajnin alirog"', () => {
        expect(reverseString('gorila ninja')).toEqual('ajnin alirog');
    });
    
    test('"01234" should become "43210"', () => {
        expect(reverseString('01234')).toEqual('43210');
    });
    
    test('If user input type is a number, then it should return "Not a valid input"', () => {
        expect(reverseString(1234)).toEqual('Not a valid input');
    });
    
    test('" " should return "Not a valid input"', () => {
        expect(reverseString(" ")).toEqual('Not a valid input');
    });
    
    test('"" should return "Not a valid input"', () => {
        expect(reverseString(" ")).toEqual('Not a valid input');
    });

    test('Null should return "Not a valid input"', () => {
        expect(reverseString(null)).toEqual('Not a valid input');
    });  
})