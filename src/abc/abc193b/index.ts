export const buying = (a: number, p: number, x: number) => {
  return x > a ? p : Number.MAX_VALUE;
};

export const solve = (n: number, apx: number[][]) => {
  return apx.reduce((p, c) => Math.min(buying(c[0], c[1], c[2]), p), Number.MAX_VALUE);
};

export const main = (input: string) => {
  const [_n, ..._apx] = input.trim().split('\n');
  const n = parseInt(_n, 10);
  const apx = _apx.map((i) => i.split(' ').map((ii) => parseInt(ii, 10)));

  const result = solve(n, apx);
  return result === Number.MAX_VALUE ? -1 : result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
