type BinarySearchOptions = {
  lowerBound?: boolean;
  upperBound?: boolean;
};

const binarySearch = (arr: number[], target: number, options?: BinarySearchOptions) => {
  let start = 0;
  let end = arr.length;
  let mid = 0;
  let guess = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    guess = arr[mid];
    if (guess === target) return mid + (options?.upperBound ? 1 : 0);
    if (guess > target) end = mid - 1;
    else start = mid + 1;
  }

  if (options?.lowerBound || options?.upperBound) return start;
  return -1;
};

const less = (a: number, b: number) => a - b;

const solve = (n: number, an: number[], bn: number[], cn: number[]) => {
  const ans = an.slice().sort(less);
  const bns = bn.slice().sort(less);
  const cns = cn.slice().sort(less);

  let count = 0;
  bns.forEach((b) => {
    const posA = binarySearch(ans, b, { lowerBound: true });
    const posC = binarySearch(cns, b, { upperBound: true });
    const countA = Math.min(n, posA);
    const countC = cns.length - posC;
    count += countA * countC;
  });

  return count;
};

export const main = (input: string) => {
  const [_n, _an, _bn, _cn] = input.trim().split('\n');
  const n = parseInt(_n, 10);
  const an = _an.split(' ').map((j) => parseInt(j, 10));
  const bn = _bn.split(' ').map((j) => parseInt(j, 10));
  const cn = _cn.split(' ').map((j) => parseInt(j, 10));

  return solve(n, an, bn, cn);
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};
