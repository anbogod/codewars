// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// TESTS:


// SOLUTION:


function countPositivesSumNegatives(input) {
  let sum1 = 0
  let sum2 = 0
  // проверка null и пустой массив
  if (!input || input.length === 0) {
    return []
  }

  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? sum1 += 1 : sum2 += input[i]
  }

  return [sum1, sum2]

}


console.log(countPositivesSumNegatives(input));
