export const solve = (x: string) => {
  return x.split('.')[0];
};

export const main = (input: string) => {
  const x = input.trim();

  const result = solve(x);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
