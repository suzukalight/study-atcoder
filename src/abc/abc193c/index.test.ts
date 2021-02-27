import { main } from '.';

describe('abc193/abc193c', () => {
  test('1', () => {
    const input = `8`;
    expect(main(input)).toBe(6);
  });

  test('2', () => {
    const input = `100000`;
    expect(main(input)).toBe(99634);
  });

  test('3', () => {
    const input = `10000000000`;
    expect(main(input)).toBe(9999897770);
  });
});
