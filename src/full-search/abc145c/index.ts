namespace abc145c {
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

    for (let perm of permGen) {
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

  const main = (input: string) => {
    const [_n, ..._xy] = input.trim().split("\n");
    const n = parseInt(_n, 10);
    const xy = _xy.map((i) => i.split(" ").map((j) => parseInt(j, 10)));

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
}
