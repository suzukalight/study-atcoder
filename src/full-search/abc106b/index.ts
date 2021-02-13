const check = (n: number) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }

  return count === 8;
};

const solve = (n: number) => {
  // 約数が8個になる奇数を全探索する
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    if (check(i)) count++;
  }
  return count;
};

export const main = (input: string) => {
  const n = parseInt(input.trim(), 10);
  console.log(solve(n));
};

const input = `105`;
main(input);
