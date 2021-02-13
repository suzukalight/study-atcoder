import { main } from '.';

describe('full-search/abc089c', () => {
  test('1', () => {
    const input = `5
MASHIKE
RUMOI
OBIRA
HABORO
HOROKANAI
`;
    expect(main(input)).toBe(2);
  });

  test('2', () => {
    const input = `4
ZZ
ZZZ
Z
ZZZZZZZZZZ
`;
    expect(main(input)).toBe(0);
  });

  test('3', () => {
    const input = `5
CHOKUDAI
RNG
MAKOTO
AOKI
RINGO
`;
    expect(main(input)).toBe(7);
  });
});
