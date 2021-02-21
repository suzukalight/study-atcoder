export const nShinX = (x: string, n: bigint) => {
  const digits = x.split('').map((i) => BigInt(i));
  const nx = digits.reduce((p, d) => p * n + d, 0n);
  return nx;
};

export const solve = (x: string, m: bigint) => {
  const digits = x.split('').map((i) => parseInt(i, 10));
  const ordered = digits.sort((a, b) => a - b);
  const d = Math.max(...ordered);

  let start = BigInt(d) + 1n;
  let end = 10n ** 18n;
  let mid: bigint;
  while (start <= end) {
    mid = start + (end - start) / 2n;
    const r1 = nShinX(x, mid);
    const r2 = nShinX(x, mid + 1n);

    if (r2 <= m) {
      start = mid + 1n;
    } else if (r1 > m) {
      end = mid - 1n;
    } else {
      return `${mid - BigInt(d)}`;
    }
  }

  return `${start - BigInt(d)}`;
};

export const main = (input: string) => {
  const [x, _m] = input.trim().split('\n');
  return solve(x, BigInt(_m));
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
