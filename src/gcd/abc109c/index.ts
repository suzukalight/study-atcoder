namespace abc109c {
  const gcd = (m: number, n: number) => {
    let r = 0;

    if (m < n) {
      r = m;
      m = n;
      n = r;
    }

    while ((r = m % n) !== 0) {
      m = n;
      n = r;
    }

    return n;
  };

  const operate = (xn: number[], n: number, x: number) => {
    let r = Math.abs(xn[0] - x);
    for (let i = 1; i < n; i++) {
      r = gcd(r, Math.abs(xn[i] - x));
    }
    return r;
  };

  const main = (input: string) => {
    const [_nx, _xn] = input.split('\n');
    const [n, x] = _nx.split(' ').map((n) => parseInt(n, 10));
    const xn = _xn.split(' ').map((n) => parseInt(n, 10));
   
    const result = operate(xn, n, x);
   
    console.log(result);
  };

  const input = `3 81
33 105 57  
`;
  main(input);
}
