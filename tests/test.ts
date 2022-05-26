import { countDistinctCharacters } from '../src/countDistinctCharacters';
import { expect } from 'chai';

describe('Test method', () => {
  it('Happy path word : Smooth', () => {
    var wordTest: string = 'Smooth';
    var expectedResult = 'S3h'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

  it('Test word with Upper and lower case', () => {
    var wordTest: string = 'smMoOth';
    var expectedResult = 's3h'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

  it('Test with numbers', () => {
    //When the user type numbers , send a message 
    //"The word should have only alphabetic characters"
    var wordTest: string = 'Smoot3h';
    var expectedResult = 'The word should have only alphabetic characters and only 1 word'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

  it('Test with word with 2 caracthers', () => {
    var wordTest: string = 'Sh';
    var expectedResult = 'S0h'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

  it('Test with 2 words', () => {
    var wordTest: string = 'Hello World';
    var expectedResult = 'The word should have only alphabetic characters and only 1 word'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

  it('Word with the same character', () => {
    var wordTest: string = 'SSSSS';
    var expectedResult = 'S0S'
    const result = countDistinctCharacters(wordTest);
    expect(result).to.equal(expectedResult);
  });

});
