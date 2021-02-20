export const solve = (s: string) => {
  for (let i = 0; i < s.length; ++i) {
    if (i % 2 === 0 && s[i] !== s[i].toLowerCase()) return false;
    if (i % 2 === 1 && s[i] !== s[i].toUpperCase()) return false;
  }
  return true;
};

export const main = (input: string) => {
  return solve(input.trim()) ? 'Yes' : 'No';
};

export const fromStdin = () => {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  console.log(main(input));
};

// fromStdin();
