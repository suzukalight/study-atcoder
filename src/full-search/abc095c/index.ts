namespace abc095c {
  const main = (input: string) => {
    const [a, b, c, x, y] = input.split(" ").map((i) => parseInt(i, 10));

    // ABピザの枚数で全探索し、最安値を求める
    let minValue = Number.MAX_VALUE;
    const maxCount = x + y;

    for (let i = 0; i < maxCount; i++) {
      const cx = Math.max(0, x - i);
      const cy = Math.max(0, y - i);
      minValue = Math.min(minValue, c * 2 * i + a * cx + b * cy);
    }

    console.log(minValue);
  };

  const input = `1500 2000 500 90000 100000`;
  main(input);
}
