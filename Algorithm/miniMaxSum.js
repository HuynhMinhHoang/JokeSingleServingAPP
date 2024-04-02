function miniMaxSum(arr) {
  if (arr.length !== 5 || arr.some((num) => num <= 0)) {
    console.log("Invalid input!");
    return;
  }
  // Sort tăng dần
  arr.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    maxSum += arr[i];
  }

  console.log("Minimum = " + minSum + ", Maximum = " + maxSum);
}

//test case
miniMaxSum([1, 2, 3, 4, 5]); //output 10 14
miniMaxSum([5, 4, 3, 2, 1]); //output 10 14
miniMaxSum([1, 1, 1, 1, 1]); //output 4 4
miniMaxSum([1, 2, 3, 4, 6]); //output 10 15
miniMaxSum([10, 20, 30, 40, 50]); //output 100 140
