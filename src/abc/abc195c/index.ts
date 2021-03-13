export const solve = (n: bigint) => {
  // 1       - 999       = 0
  // 1000    - 999999    = 1
  // 1000000 - 999999999 = 2

  let comma = 0n;
  for (let m = 1n; m <= 16; ++m) {
    const d = n - 1000n ** m + 1n;
    if (d <= 0) break;
    comma += d;
  }
  return `${comma}`;
};

export const main = (input: string) => {
  const n = BigInt(input.trim());

  const result = solve(n);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
