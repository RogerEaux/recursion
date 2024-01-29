function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let fib = [0, 1];
  for (let i = 0; i < n - 2; i += 1) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return fib;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = fibsRec(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;
}

console.log(fibs(10), fibsRec(10));
