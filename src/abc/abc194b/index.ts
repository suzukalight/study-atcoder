export const solve = (n: number, abn: number[][]) => {
  let min = Number.MAX_VALUE;

  for (let ai = 0; ai < n; ++ai) {
    for (let bi = 0; bi < n; ++bi) {
      const tm = ai === bi ? abn[ai][0] + abn[bi][1] : Math.max(abn[ai][0], abn[bi][1]);
      min = Math.min(min, tm);
    }
  }

  return min;
};

export const main = (input: string) => {
  const [_n, ..._abn] = input.split('\n');
  const n = parseInt(_n, 10);
  const abn = _abn.map((ab) => ab.split(' ').map((i) => parseInt(i, 10)));

  const result = solve(n, abn);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
