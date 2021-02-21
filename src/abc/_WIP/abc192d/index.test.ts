import { main } from '.';

describe('abc192/abc192b', () => {
  test('1', () => {
    const input = `22
10
`;
    expect(main(input)).toBe('2');
  });

  test('2', () => {
    const input = `999
1500
`;
    expect(main(input)).toBe('3');
  });

  test('3', () => {
    const input = `100000000000000000000000000000000000000000000000000000000000
1000000000000000000
`;
    expect(main(input)).toBe('1');
  });

  test.skip('4', () => {
    const input = `9
1000000000000000000
`;
    expect(main(input)).toBe(1);
  });

  test('5', () => {
    const input = `1234
1000000000000000000
`;
    expect(main(input)).toBe('999995');
  });
});
