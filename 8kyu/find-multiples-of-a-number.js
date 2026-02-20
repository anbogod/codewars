// DESCRIPTION:
// In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.
// TESTS:

// assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
// assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
// assert.sameOrderedMembers(findMultiples(5, 7), [5])
// assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
// SOLUTION:


function findMultiples(integer, limit) {
  let arr = []

  for (let i = 1; i * integer <= limit; i++) {
    arr.push(integer * i)
  }

  return arr
}


console.log(findMultiples(4, 27));
