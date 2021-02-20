export const g1 = (n: number) => {
  const digits = `${n}`.split('').map((i) => parseInt(i, 10));
  const ordered = digits.sort((a, b) => b - a);
  return parseInt(ordered.join(''), 10);
};

export const g2 = (n: number) => {
  const digits = `${n}`.split('').map((i) => parseInt(i, 10));
  const ordered = digits.sort((a, b) => a - b);
  return parseInt(ordered.join(''), 10);
};

export const f = (n: number) => {
  return g1(n) - g2(n);
};

export const solve = (n: number, k: number) => {
  let a = n;
  for (let i = 1; i <= k; ++i) {
    const result = f(a);
    if (result === a) return a;
    a = result;
  }
  return a;
};

export const main = (input: string) => {
  const [n, k] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));
  return solve(n, k);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
