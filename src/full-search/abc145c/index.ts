// 順列を返す generator
const innerPG = (xs) => (k) => (pres) =>
  (function* () {
    if (k === 0) yield pres;
    for (const i of xs.keys())
      yield* innerPG(xs.filter((_, j) => j !== i))(k - 1)([...pres, xs[i]]);
    return;
  })();
const permG = (xs) => (k) => innerPG(xs)(k)([]);

const solve = (n: number, xy: number[][]) => {
  // 経路を順列で決定し、距離を計測する
  const p = [...Array(n)].map((_i, i) => i);
  const permGen = permG(p)(n);
  let dist = 0;
  let count = 0;

  for (const perm of permGen) {
    for (let i = 1; i < n; ++i) {
      const p1x = xy[perm[i - 1]][0];
      const p1y = xy[perm[i - 1]][1];
      const p2x = xy[perm[i]][0];
      const p2y = xy[perm[i]][1];

      dist += Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
    }
    ++count;
  }

  return dist / count;
};

export const main = (input: string) => {
  const [_n, ..._xy] = input.trim().split('\n');
  const n = parseInt(_n, 10);
  const xy = _xy.map((i) => i.split(' ').map((j) => parseInt(j, 10)));

  return solve(n, xy);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
