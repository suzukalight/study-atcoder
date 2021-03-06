export const solve = (n: number, m: number, an: number[]) => {
  console.log('nman', n, m, an);
  // index hashmapを作る
  const mp = an.reduce((p, c, i) => {
    if (p[c]) p[c].push(i);
    else p[c] = [i];
    return p;
  }, {} as Record<string, number[]>);

  // mapのkeys
  const keys = Object.keys(mp).sort((a, b) => +a - +b);

  // M個連続する範囲ができれば成功
  const marked = [...Array(n)].map((_i) => 0);
  let count = 0;
  for (let ki = 0; ki < keys.length; ++ki) {
    const index = keys[ki];
    mp[index].forEach((i) => {
      marked[i] = 1;
    });

    console.log(index, marked);

    count = 0;
    for (let j = 0; j < n; ++j) {
      if (marked[j]) ++count;
      else count = 0;

      console.log('ma', count);
      if (count >= m) return m + 1;
    }
  }

  return Number.MAX_VALUE;
};

export const main = (input: string) => {
  const [_nm, _an] = input.split('\n');
  const [n, m] = _nm.split(' ').map((i) => parseInt(i, 10));
  const an = _an.split(' ').map((i) => parseInt(i, 10));

  const result = solve(n, m, an);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
