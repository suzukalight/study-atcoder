export const main = (input: string) => {
  const [a, b, c, x, y] = input.split(' ').map((i) => parseInt(i, 10));

  // ABピザの枚数で全探索し、最安値を求める
  let minValue = Number.MAX_VALUE;
  const maxCount = x + y;

  for (let i = 0; i < maxCount; i++) {
    const cx = Math.max(0, x - i);
    const cy = Math.max(0, y - i);
    minValue = Math.min(minValue, c * 2 * i + a * cx + b * cy);
  }

  return minValue;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
