function binarySearch(arr, target) {
  let idx = -1;
  let iMin = 0;
  let iMax = arr.length - 1;
  while (iMin <= iMax) {
    const iMid = Math.floor((iMin + iMax) / 2);
    if (arr[iMid] === target) {
      idx = iMid;
      break;
    } else if (arr[iMid] < target) {
      iMin = iMid + 1;
    } else {
      iMax = iMid - 1;
    }
  }
  return [idx, iMin, iMax];
}

const less = (a: number, b: number) => a - b;

export const solve = (
  n: number,
  m: number,
  q: number,
  wv: number[][],
  xm: number[],
  queries: number[][],
) => {
  // 価値の大きい順に並べておく
  const wvs = wv.sort((a, b) => b[1] - a[1]);

  // queryだけ繰り返す
  return queries.map((query) => {
    // 使えない箱はサイズを0にする
    const boxes = xm
      .map((x, index) => (query[0] - 1 <= index && index <= query[1] - 1 ? 0 : x))
      .filter((x) => x)
      .sort(less);

    // 価値の大きい順に、一番サイズの近い箱に入れるようにする
    let totalValue = 0;
    for (let i = 0; i < n; ++i) {
      if (boxes.length <= 0) break;

      // 探す
      const [idx, iMin] = binarySearch(boxes, wvs[i][0]);

      // 箱を切り出す
      if (idx >= 0 || iMin >= 0) {
        totalValue += wvs[i][1];
        boxes.splice(iMin, 1);
      }
    }

    return totalValue;
  });
};

export const main = (input: string) => {
  const [_nmq, ...rest1] = input.trim().split('\n');
  const [n, m, q] = _nmq.split(' ').map((i) => parseInt(i, 10));
  const _wv = rest1.slice(0, n);
  const _xm = rest1.slice(n, n + 1)[0];
  const _query = rest1.slice(n + 1);

  const wv = _wv.map((j) => j.split(' ').map((i) => parseInt(i, 10)));
  const xm = _xm.split(' ').map((i) => parseInt(i, 10));
  const queries = _query.map((j) => j.split(' ').map((i) => parseInt(i, 10)));

  const result = solve(n, m, q, wv, xm, queries);
  return result.join('\n');
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
