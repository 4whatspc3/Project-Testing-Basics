import caesarCipher from "./caesarCipher"

test('"a" returns "d"', () => {
  expect(caesarCipher("a", 3)).toBe("d");
});

test('"xyz" returns "abc"', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('"heLLo" returns "khOOr"', () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});

test('"Hello, World!" returns "Khoor, Zruog!"', () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('"1a" returns "1d"', () => {
  expect(caesarCipher("1a", 3)).toBe("1d");
});

test('"1#" returns "1#"', () => {
  expect(caesarCipher("1#", 3)).toBe("1#");
});

test('1 returns "Not a valid input"', () => {
  expect(caesarCipher(1, 3)).toBe("Not a valid input");
});

test('If shift factor is not declared, then it returns "Shift factor is undefined"', () => {
  expect(caesarCipher("abc")).toBe("Shift factor is undefined");
});