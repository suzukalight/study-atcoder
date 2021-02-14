// 0: 0-0=0
// 1: 1-0=1, 1-1=0
// 2: 2-0=2, 2-1=1, 2-2=0
// 3: 3-0=3, 3-1=2, 3-2=1, 3-3=0
// 4: 4-0=4, 4-1=3, 4-2=2, 4-3=1, 4-4=0
// 5: 5-0=5, 5-1=4, 5-2=3, 5-3=2, 5-4=1, 5-5=0
// 6: 6-0=6, 6-1=5, 6-2=4, 6-3=3, 6-4=2, 6-5=1, 6-6=0

const solveOne = (l: number, r: number) => {
  // Σ R-2L+1 個のパターンがある 
  const n = r - 2 * l + 2;
  if (n < 0) return 0;
  return (n * (n - 1)) / 2;
};

const solve = (t: number, lrt: number[][]) => {
  const results = lrt.map((lr) => solveOne(lr[0], lr[1]));
  return results.join('\n');
};

export const main = (input: string) => {
  const [_t, ..._lrt] = input.trim().split('\n');
  const t = parseInt(_t, 10);
  const lrt = _lrt.map((i) => i.split(' ').map((j) => parseInt(j, 10)));

  return solve(t, lrt);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
