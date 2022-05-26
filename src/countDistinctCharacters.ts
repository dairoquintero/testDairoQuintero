 /**
  * This method parses a word and returns the word with the following:
  * first letter, number of distinct characters between first and last character, and last letter
  * Example Smooth --> S3h
  * The word should have contain alphabetic characters
  * When the word not contains only alphabetic characters send a message
  * for request a valid word
  * @param {string} word
  */

export function countDistinctCharacters(word: string) {
  if (onlyLetters(word) === true) {
    let arrayWord = Array<string>();
    arrayWord = word.split('');
    let countDinstinc = Array<string>(3);
    let mySetArray = new Set(word.slice(1,arrayWord.length-1).toLocaleLowerCase().split(''));
    //select first letter and last
    countDinstinc[0] = arrayWord[0];
    countDinstinc[2] = arrayWord[arrayWord.length - 1];
    //exclude in the count the first and last letter
    countDinstinc[1] = (mySetArray.size).toString();
    return countDinstinc.join('');
  }
  else return 'The word should have only alphabetic characters and only 1 word'
}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}
export default countDistinctCharacters;
