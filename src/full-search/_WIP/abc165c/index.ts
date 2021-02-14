const nextPerm = (perm: number[], base: number[]) => {
  // const len = perm.length;
  // if (len === 0) return nextPerm([base[0]], n, base);
  // if (perm[len - 1] === base[base.length - 1]) {
  //   return nextPerm(perm.slice(0, len - 1), n, base);
  // }
  // const basePos = base.findIndex((b) => b === perm[len - 1]);
  // if (len < n) {
  //   return nextPerm([...perm, base[basePos + 1]], n, base);
  // }
  // return nextPerm([...perm.slice(0, len - 1), base[basePos + 1]], n, base);
  const result = [...perm];
  const end = perm.length - 1;
  const positions = perm.map((p) => base.findIndex((b) => b === p));
  // console.log(result, end, positions);
  for (let p = end; p >= 0; --p) {
    // console.log(p, positions[p] !== end);
    if (positions[p] !== end) {
      result[p] = base[positions[p] + 1];
      for (let i = p + 1; i <= end; ++i) {
        result[i] = base[0];
      }
      return result;
    }
  }

  return null;
};

const solve = (n: number, xy: number[][]) => {
  console.log(n, xy);
  let perm = [0, 0, 0];
  while (perm) {
    perm = nextPerm(perm, [0, 1, 2, 3]);
    console.log(perm);
  }
};

export const main = (input: string) => {
  const [_n, ..._xy] = input.trim().split('\n');
  const n = parseInt(_n, 10);
  const xy = _xy.map((i) => i.split(' ').map((j) => parseInt(j, 10)));

  console.log(solve(n, xy));
};

const input = `8
-406 10
512 859
494 362
-955 -475
128 553
-986 -885
763 77
449 310
`;
main(input);
