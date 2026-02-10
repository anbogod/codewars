// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// For example:

// TESTS:

// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

// SOLUTION:

function solution(str) {
  //   let charArray = str.split("")
  //   reversedArray = charArray.reverse();
  //   let reversedString =reversedArray.join("")
  //   return reversedString
  let reversedStr = ""

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];

  }

  return reversedStr

}

console.log(solution('hello'));
