export const solve = (a: number, b: number) => {
  if (a + b >= 15 && b >= 8) return 1;
  if (a + b >= 10 && b >= 3) return 2;
  if (a + b >= 3) return 3;
  return 4;
};

export const main = (input: string) => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));

  const result = solve(a, b);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
