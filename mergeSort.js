function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const aux = mergeSort(arr.slice(0, Math.round(arr.length / 2))).concat(
    mergeSort(arr.slice(Math.round(arr.length / 2)))
  );

  arr.splice(0, arr.length);
  let i = 0;
  let j = Math.round(aux.length / 2);
  while (true) {
    if (Math.min(aux[i], aux[j]) === aux[i]) {
      arr.push(aux[i]);
      i += 1;
    } else {
      arr.push(aux[j]);
      j += 1;
    }
    if (i === Math.round(aux.length / 2)) {
      return arr.concat(aux.slice(j));
    }
    if (j === aux.length) {
      return arr.concat(aux.slice(i, Math.round(aux.length / 2)));
    }
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([77, 42, 69]));
