export const solve = (h: number, w: number, a: number, b: number) => {
  // 適当に 0, 1 と書いた配列が、条件を満たすか？
  let c = 0;
  const hw = h * w;
  const digits = 2 ** hw;
  for (let i = 0; i < digits; ++i) {
    // ビット列を1,2に見立てる
    const bin = i.toString(2);
    const fill = ('0'.repeat(hw) + bin).slice(-hw).split('');

    // 1の個数が一致するか
    if (fill.filter((f) => f === '0').length !== b) continue;

    // 2の個数が一致するか
    if (fill.filter((f) => f === '1').length !== a * 2) continue;

    // 2は隣接条件を満たすか

    // 条件を満たしたものをカウント
    ++c;
  }

  return c;
};

export const main = (input: string) => {
  const [h, w, a, b] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));

  const result = solve(h, w, a, b);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
