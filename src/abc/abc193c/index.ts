export const solve = (n: number) => {
  const abSet = new Set();

  // a^b が n 以下であるものを計算する
  for (let a = 2; a < 100000; ++a) {
    for (let b = 2; b < 100000; ++b) {
      const ab = a ** b;
      if (ab <= n) abSet.add(ab);
      else break;
    }
  }

  return n - abSet.size;
};

export const main = (input: string) => {
  const n = parseInt(input, 10);
  const result = solve(n);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
