export const solve = (n: number) => {
  // 要するにコンプガチャを最初1回引いておいたあとの状態
  let sigma = 0;
  for (let i = 1; i <= n; ++i) {
    sigma += 1 / i;
  }
  return n * sigma - 1;
};

export const main = (input: string) => {
  const n = parseInt(input, 10);
  const result = solve(n);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
