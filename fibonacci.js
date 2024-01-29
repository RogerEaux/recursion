function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let fib = [0, 1];
  let curr;
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 0; i < n - 2; i += 1) {
    curr = prev1 + prev2;
    fib.push(curr);
    prev2 = prev1;
    prev1 = curr;
  }

  return fib;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  return prev;
}

console.log(fibs(10), fibsRec(10));
