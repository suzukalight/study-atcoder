import { main } from '.';

describe('abc194/abc194e', () => {
  test.skip('1', () => {
    const input = `3 2
0 0 1
`;
    expect(main(input)).toBe(1);
  });

  test.skip('2', () => {
    const input = `3 2
1 1 1
`;
    expect(main(input)).toBe(0);
  });

  test.skip('3', () => {
    const input = `3 2
0 1 0    
`;
    expect(main(input)).toBe(2);
  });

  test.skip('4', () => {
    const input = `7 3
0 0 1 2 0 1 0    
`;
    expect(main(input)).toBe(2);
  });
});
