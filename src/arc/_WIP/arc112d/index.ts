// 0: 0-0=0
// 1: 1-0=1, 1-1=0
// 2: 2-0=2, 2-1=1, 2-2=0
// 3: 3-0=3, 3-1=2, 3-2=1, 3-3=0
// 4: 4-0=4, 4-1=3, 4-2=2, 4-3=1, 4-4=0
// 5: 5-0=5, 5-1=4, 5-2=3, 5-3=2, 5-4=1, 5-5=0
// 6: 6-0=6, 6-1=5, 6-2=4, 6-3=3, 6-4=2, 6-5=1, 6-6=0

// 2 6 = 6
// 1 5 = 10
// 3 6 = 1

const dig = (
  px: number,
  py: number,
  h: number,
  w: number,
  shw: number[][],
  fw: number[],
  fh: number[],
) => {
  for (let y = 0; y < h; ++y) {
    if (shw[y][px] === 1) {
      shw[y][px] = 2;
      fh[y] = 1;
      dig(px, y, h, w, shw, fw, fh);
    }
  }

  for (let x = 0; x < w; ++x) {
    if (shw[py][x] === 1) {
      shw[py][x] = 2;
      fw[x] = 1;
      dig(x, py, h, w, shw, fw, fh);
    }
  }
};

const solve = (h: number, w: number, shw: number[][]) => {
  const fw = new Array(w).fill(0);
  const fh = new Array(h).fill(0);

  // 四隅に # を置く
  shw[0][0] = 1;
  shw[0][w - 1] = 1;
  shw[h - 1][0] = 1;
  shw[h - 1][w - 1] = 1;

  // 四隅から辿れる # を探す
  dig(0, 0, h, w, shw, fw, fh);

  const ch = fh.reduce((p, c) => p + c, 0);
  const cw = fw.reduce((p, c) => p + c, 0);

  return Math.min(h - ch, w - cw);
};

export const main = (input: string) => {
  const [_hw, ..._shw] = input.trim().split('\n');
  const [h, w] = _hw.split(' ').map((j) => parseInt(j, 10));
  const shw = _shw.map((i) => i.split('').map((j) => (j === '#' ? 1 : 0)));

  return solve(h, w, shw);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
