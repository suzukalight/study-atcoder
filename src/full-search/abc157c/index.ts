const check = (digits: number[], m: number, smcm: number[][]) => {
  for (let i = 0; i < m; i++) {
    if (digits[smcm[i][0] - 1] !== smcm[i][1]) return false;
  }
  return true;
};

const solve = (n: number, m: number, smcm: number[][]) => {
  // N桁の整数の最大最小値を求め、その範囲の整数の各桁の値と、与えられた条件がマッチするかを全探索する
  // ただし、1桁の数値の場合は、0を有効な値とする
  const _minDigit = Math.pow(10, n - 1);
  const minDigit = _minDigit === 1 ? 0 : _minDigit;
  const maxDigit = Math.pow(10, n) - 1;

  for (let d = minDigit; d <= maxDigit; d++) {
    const digits = `${d}`.split('').map((i) => parseInt(i, 10));
    if (check(digits, m, smcm)) return d;
  }

  return -1;
};

export const main = (input: string) => {
  const [_nm, ..._smcm] = input.split('\n');
  const [n, m] = _nm.split(' ').map((i) => parseInt(i, 10));
  const smcm = _smcm.map((i) => i.split(' ').map((j) => parseInt(j, 10)));

  console.log(solve(n, m, smcm));
};

const input = `3 3
1 7
3 2
1 7
`;
main(input);
