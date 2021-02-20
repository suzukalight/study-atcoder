export const main = (input: string) => {
  const x = parseInt(input, 10);
  const amari = x % 100;

  return 100 - amari;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
