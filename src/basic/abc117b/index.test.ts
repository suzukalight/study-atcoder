import { main } from '.';

describe('full-search/abc057c', () => {
  test('1', () => {
    const input = `4
3 8 5 1
`;
    expect(main(input)).toBe('Yes');
  });

  test('2', () => {
    const input = `4
3 8 4 1
`;
    expect(main(input)).toBe('No');
  });

  test('3', () => {
    const input = `10
1 8 10 5 8 12 34 100 11 3
`;
    expect(main(input)).toBe('No');
  });
});
