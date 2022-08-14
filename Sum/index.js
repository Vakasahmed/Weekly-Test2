function sum_sqr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sqr = Math.pow(arr[i], 2);
    sum = sum + sqr;
  }
  console.log(sum);
}
sum_sqr([0, 1, 2, 3, 4]);
