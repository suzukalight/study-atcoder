// 100 -> 9
// 1000 -> 9
// 10000 -> 99
// 100000 -> 99
// 1000000 -> 999
// 10000000 -> 999

// 偶数桁の左半分と右半分の小さい方

// 33 -> 33 -> 3,3 -> min(3,3) -> 3
// 1313 -> 9+ 13, 13 -> min(13-10, 13-10)
// 1234567 -> 1,23,45,67 -> 0+900+99+9 = 999

// 1313 -> [13,10] + 9 -> 4 + 9 = 13
// 3102 -> [30,10] + 9 ->
// 3132 -> [30,10] + 1 + 9 ->

export const solve = (x: string) => {
  if (x.length <= 1) return 0;

  // 2桁ごとに9*10^N個
  const rest = Math.floor((x.length - 1) / 2);

  let result = 0;
  for (let i = 0; i < rest; ++i) {
    result += 9 * 10 ** i;
  }

  if (x.length % 2 === 1) return result;

  // 左半分
  const p = Math.floor(x.length / 2);
  const head = parseInt(x.slice(0, p), 10);
  const tail = parseInt(x.slice(p), 10);
  const size = head - 10 ** rest;

  result += size;

  // 左半分 <= 右半分なら+1
  if (head <= tail) ++result;

  return result;
};

export const main = (input: string) => {
  const x = input.trim();

  const result = solve(x);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
