import { main } from '.';

describe('abc196/abc196c', () => {
  test('1', () => {
    const input = `33`;
    expect(main(input)).toBe(3);
  });

  test('2', () => {
    const input = `1333`;
    expect(main(input)).toBe(13);
  });

  test('3', () => {
    const input = `10000000`;
    expect(main(input)).toBe(999);
  });

  test('4', () => {
    const input = `3102`;
    expect(main(input)).toBe(30);
  });

  test('5', () => {
    const input = `3132`;
    expect(main(input)).toBe(31);
  });

  test('6', () => {
    const input = `0`;
    expect(main(input)).toBe(0);
  });

  test('7', () => {
    const input = `9`;
    expect(main(input)).toBe(0);
  });

  test('8', () => {
    const input = `99999999999`;
    expect(main(input)).toBe(99999);
  });

  test('9', () => {
    const input = `99999`;
    expect(main(input)).toBe(99);
  });

  test('10', () => {
    const input = `1234567`;
    expect(main(input)).toBe(999);
  });

  test('11', () => {
    const input = `7654321`;
    expect(main(input)).toBe(999);
  });

  test('12', () => {
    const input = `765432`;
    expect(main(input)).toBe(9+90+665);
  });
});
