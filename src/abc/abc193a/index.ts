export const main = (input: string) => {
  const [a, b] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));

  const result = ((a - b) * 100) / a;
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
