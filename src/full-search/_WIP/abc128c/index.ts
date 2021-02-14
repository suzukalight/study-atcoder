export const check = (digits: number[], m: number, smcm: number[][]) => {
  for (let i = 0; i < m; i++) {
    if (digits[smcm[i][0] - 1] !== smcm[i][1]) return false;
  }
  return true;
};

const solve = (n: number, m: number, sm: number[][], pm: number[]) => {
  // ビット全探索で、すべてのスイッチをON/OFFしてみる。2^10
  const pattern = 1 << n;
  let count = 0;
  for (let i = 0; i < pattern; ++i) {
    let ok = true;
    for (let j = 0; j < m; ++j) {
      let c = 0;
      sm[j].forEach((s) => {
        if ((i >> s) & 1) ++c;
      });
      console.log(i, j, c, pm[j]);
      if (c % 2 !== pm[j]) ok = false;
    }

    if (ok) ++count;
  }

  return count;
};

export const main = (input: string) => {
  const [_nm, ..._kmpm] = input.trim().split('\n');
  const [n, m] = _nm.split(' ').map((i) => parseInt(i, 10));
  const _pm = _kmpm.pop();
  const sm = _kmpm.map((i) =>
    i
      .split(' ')
      .slice(1)
      .map((j) => parseInt(j, 10)),
  );
  const pm = _pm.split(' ').map((j) => parseInt(j, 10));

  console.log(solve(n, m, sm, pm));
};

const input = `2 2
2 1 2
1 2
0 1
`;
main(input);
