// DESCRIPTION:
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// TESTS:

// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
// assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
// SOLUTION:


function smash(words) {
  let str = ""

  for (let i = 0; i < words.length; i++) {
    str += (words[i])

    if (i < words.length - 1) {
      str += " "
    }
  }

  return str
};

console.log(smash(words));
