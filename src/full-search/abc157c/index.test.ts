import { main } from '.';

describe('full-search/abc157c', () => {
  test('1', () => {
    const input = `3 3
1 7
3 2
1 7
`;
    expect(main(input)).toBe(702);
  });

  test('2', () => {
    const input = `3 2
2 1
2 3
`;
    expect(main(input)).toBe(-1);
  });

  test('3', () => {
    const input = `3 1
1 0
`;
    expect(main(input)).toBe(-1);
  });
});
