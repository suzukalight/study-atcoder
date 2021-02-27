export const calcPoint = (cards: number[]) => {
  // 種類ごとの枚数を数える
  const cardMap = cards.reduce((p, c) => {
    p[c] = p[c] ? p[c] + 1 : 1;
    return p;
  }, {} as Record<string, number>);

  // 得点計算する
  const point = Object.entries(cardMap)
    .map(([k, v]) => +k * 10 ** (v - 1))
    .reduce((p, c) => p + c, 0);

  return point;
};

export const solve = (k: number, s: number[], t: number[]) => {
  // もうないカード
  const pickedCards = [...Array(9).keys()].map((_i) => 0);
  s.forEach((_s) => pickedCards[_s - 1]++);
  t.forEach((_t) => pickedCards[_t - 1]++);

  // 余っているカードの枚数（1-9）
  const r = pickedCards.map((c) => k - c);

  // パターン数
  const cardCount = 9 * k - 8;
  const patternCount = cardCount * (cardCount - 1);

  // 配り切る
  let winCount = 0;
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (r[i] === 0 || r[j] === 0) continue;
      if (i === j && r[i] === 1) continue;
      const pa = calcPoint([...s, i + 1]);
      const pb = calcPoint([...t, j + 1]);
      if (pa > pb) {
        winCount += i !== j ? r[i] * r[j] : r[i] * (r[i] - 1);
      }
    }
  }

  return winCount / patternCount;
};

export const main = (input: string) => {
  const [_k, _s, _t] = input.split('\n');
  const k = parseInt(_k, 10);
  const s = _s
    .substring(0, 4)
    .split('')
    .map((i) => parseInt(i, 10));
  const t = _t
    .substring(0, 4)
    .split('')
    .map((i) => parseInt(i, 10));

  const result = solve(k, s, t);
  return result;
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
