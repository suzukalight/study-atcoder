export const main = (input: string) => {
  const [_n, _ln] = input.split('\n');
  const n = parseInt(_n, 10);
  const ln = _ln.split(' ').map((l) => parseInt(l, 10));

  // 一番大きな値と、それを除くすべての値を比較する
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    sum += ln[i];
    if (ln[i] > max) max = ln[i];
  }

  const result = max < sum - max ? 'Yes' : 'No';

  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
