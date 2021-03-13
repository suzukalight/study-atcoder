export const solve = (a: number, b: number, w: number) => {
  const wg = w * 1000;

  // 考えられる範囲
  const cMin = Math.floor(wg / b);
  const cMax = Math.ceil(wg / a);

  // その範囲内でありえるみかんの重量値の範囲は？
  let min = 0;
  let max = 0;
  for (let i = cMin; i <= cMax; ++i) {
    const iMin = a * i;
    const iMax = b * i;
    if (iMin <= wg && wg <= iMax) {
      if (!min) min = i;
      max = i;
    }
  }

  return min === 0 ? 'UNSATISFIABLE' : `${min} ${max}`;
};

export const main = (input: string) => {
  const [a, b, w] = input
    .trim()
    .split(' ')
    .map((i) => parseInt(i, 10));

  const result = solve(a, b, w);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
