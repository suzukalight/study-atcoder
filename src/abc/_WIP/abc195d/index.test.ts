import { main } from '.';

describe('abc195/abc195d', () => {
  test.skip('1', () => {
    const input = `3 4 3
1 9
5 3
7 8
1 8 6 9
4 4
1 4
1 3
`;
    expect(main(input)).toBe(`20
0
9`);
  });
});
