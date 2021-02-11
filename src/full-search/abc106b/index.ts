namespace abc106b {
  const check = (n: number) => {
    if (n % 2 === 0) return false;

    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) count++;
    }

    return count === 8;
  };

  const solve = (n: number) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (check(i)) count++;
    }
    return count;
  };

  const main = (input: string) => {
    const n = parseInt(input.trim(), 10);
    console.log(solve(n));
  };

  const input = `105`;
  main(input);
}
