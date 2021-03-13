import { main } from '.';

describe('abc195/abc195b', () => {
  test('1', () => {
    const input = `100 200 2`;
    expect(main(input)).toBe('10 20');
  });

  test('2', () => {
    const input = `120 150 2`;
    expect(main(input)).toBe('14 16');
  });

  test('3', () => {
    const input = `300 333 1`;
    expect(main(input)).toBe('UNSATISFIABLE');
  });
});
