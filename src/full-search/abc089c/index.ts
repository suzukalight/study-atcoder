const solve = (n: number, sn: string[]) => {
  // 1. MARCHそれぞれを数え上げる（重複名がないのでSetまでは不要）
  // 2. mC3 で 10パターンを調査する
  //   a. sum(c[x]*c[y]*c[z])

  const marchCount = [0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    if (sn[i][0] === 'M') marchCount[0]++;
    if (sn[i][0] === 'A') marchCount[1]++;
    if (sn[i][0] === 'R') marchCount[2]++;
    if (sn[i][0] === 'C') marchCount[3]++;
    if (sn[i][0] === 'H') marchCount[4]++;
  }

  let count = 0;
  for (let x = 0; x < 5; x++) {
    for (let y = x + 1; y < 5; y++) {
      for (let z = y + 1; z < 5; z++) {
        count += marchCount[x] * marchCount[y] * marchCount[z];
      }
    }
  }

  return count;
};

export const main = (input: string) => {
  const [_n, ...sn] = input.split('\n');
  const n = parseInt(_n, 10);

  return solve(n, sn);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
