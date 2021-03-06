export const solve = (n: number, an: number[]) => {
  // 個数を保持するhashmapへ
  const hm = an.reduce((p, c) => {
    p[c] ? p[c]++ : (p[c] = 1);
    return p;
  }, {} as Record<string, number>);

  // 通りの数×差の値
  let sum = 0;
  for (let a1 = -200; a1 <= 200; ++a1) {
    for (let a2 = a1; a2 <= 200; ++a2) {
      const c1 = hm[a1];
      const c2 = hm[a2];
      if (!c1 || !c2) continue;
      sum += (a1 - a2) * (a1 - a2) * (c1 * c2);
    }
  }

  return sum;
};

export const main = (input: string) => {
  const [_n, _an] = input.split('\n');
  const n = parseInt(_n, 10);
  const an = _an.split(' ').map((i) => parseInt(i, 10));

  const result = solve(n, an);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
