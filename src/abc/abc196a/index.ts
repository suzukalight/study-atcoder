export const solve = (b: number, c: number) => {
  return b - c;
};

export const main = (input: string) => {
  const [_ab, _cd] = input.trim().split('\n');
  const [a, b] = _ab.split(' ').map((i) => parseInt(i, 10));
  const [c, d] = _cd.split(' ').map((i) => parseInt(i, 10));

  const result = solve(b, c);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
