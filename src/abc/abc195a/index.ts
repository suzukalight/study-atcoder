export const solve = (m: number, h: number) => {
  return h % m === 0;
};

export const main = (input: string) => {
  const [m, h] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));

  const result = solve(m, h) ? 'Yes' : 'No';
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
