const gcd = (m: number, n: number) => {
  let r = 0;

  if (m < n) {
    r = m;
    m = n;
    n = r;
  }

  while ((r = m % n) !== 0) {
    m = n;
    n = r;
  }

  return n;
};

const solve = (xn: number[], n: number, x: number) => {
  // すべての |X-xi| について約数であれば良い → 最大公約数を求める
  let r = Math.abs(xn[0] - x);
  for (let i = 1; i < n; i++) {
    r = gcd(r, Math.abs(xn[i] - x));
  }
  return r;
};

export const main = (input: string) => {
  const [_nx, _xn] = input.split('\n');
  const [n, x] = _nx.split(' ').map((n) => parseInt(n, 10));
  const xn = _xn.split(' ').map((n) => parseInt(n, 10));

  const result = solve(xn, n, x);

  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
