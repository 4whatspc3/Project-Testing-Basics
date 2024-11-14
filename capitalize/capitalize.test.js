import firstToCapital from "./capitalize";

describe("Capitalize", () => {
  test('helloWorld should become HelloWorld', () => {
    expect(firstToCapital('helloworld')).toBe('Helloworld');
  })

  test('hello world should become Hello world', () => {
    expect(firstToCapital('hello world')).toBe('Hello world');
  })

  test('hello_world should become Hello_world', () => {
    expect(firstToCapital('hello_world')).toBe('Hello_world');
  })

  test('!%*@hello world should become !%*@hello world', () => {
    expect(firstToCapital('!%*@hello world')).toBe('!%*@hello world');
  })

  test('!%*@ should become !%*@', () => {
    expect(firstToCapital('!%*@')).toBe('Not a valid input');
  })


  test('7 should become "Not a valid input"', () => {
    expect(firstToCapital(7)).toBe('Not a valid input');
  })

  test('"7" should become "Not a valid input"', () => {
    expect(firstToCapital('7')).toBe('Not a valid input');
  })

  test(' " " should become "Not a valid input"', () => {
    expect(firstToCapital(" ")).toBe('Not a valid input');
  })

  test(' "" should become "Not a valid input"', () => {
    expect(firstToCapital("")).toBe('Not a valid input');
  })
});