import { main } from '.';

describe('full-search/abc057c', () => {
  test('1', () => {
    const input = `5
2 6
0 0
1000000 1000000
12345 67890
0 1000000
`;
    expect(main(input)).toBe(`6
1
0
933184801
500001500001`);
  });
});
