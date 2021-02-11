namespace abc117b {
  const main = (input: string) => {
    const [_n, _ln] = input.split("\n");
    const n = parseInt(_n, 10);
    const ln = _ln.split(" ").map((l) => parseInt(l, 10));

    let sum = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
      sum += ln[i];
      if (ln[i] > max) max = ln[i];
    }

    const result = max < sum - max ? "Yes" : "No";

    console.log(result);
  };

  const input = `4
3 8 5 1
`;
  main(input);
}
