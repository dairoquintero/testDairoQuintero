export function countDistinctCharacters(word: string) {
  if (onlyLetters(word) === true) {
    let arrayWord = Array<string>();
    arrayWord = word.split('');
    let countDinstinc = Array<string>(3);
    let mySetArray = new Set(word.toLocaleLowerCase().split(''));
    //select first letter and last
    countDinstinc[0] = arrayWord[0];
    countDinstinc[2] = arrayWord[arrayWord.length - 1];
    //exclude in the count the first and last letter
    countDinstinc[1] = (mySetArray.size - 2).toString();
    return countDinstinc.join('');
  }
  else return 'The word should have only alphabetic characters and only 1 word'
}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}
export default countDistinctCharacters;
