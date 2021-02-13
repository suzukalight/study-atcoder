const f = (a: number, b: number) => {
  const digitsA = `${a}`.length;
  const digitsB = `${b}`.length;
  return Math.max(digitsA, digitsB);
};

const solve = (n: number) => {
  // N<=A*B で取りうる A,B の最大値は sqrt(N)
  // sqrt(N) まで A,B のペアを全探索
  const rt = Math.sqrt(n);
  let minF = Number.MAX_VALUE;

  for (let a = 1; a <= rt; a++) {
    if (n % a) continue;
    const b = n / a;
    minF = Math.min(minF, f(a, b));
  }

  return minF;
};

export const main = (input: string) => {
  const n = parseInt(input.trim(), 10);

  console.log(solve(n));
};

const input = `9876543210`;
main(input);
