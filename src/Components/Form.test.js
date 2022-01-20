import './Form';
import { convertRGB, cleanString, isCorrectType, isValidFloat } from './formFunctions';

describe("Test for the convertRGB() function", () => {
  it("Should convert valid RGB value into hex", () => {
    expect(convertRGB(...['46', '56', '66'])).toBe("#2e3842");
    expect(convertRGB(...['38', '96', '232'])).toBe("#2660e8");
    expect(convertRGB(...['46', '2', '34'])).toBe("#2e0222");
    expect(convertRGB(...['234', '253', '67'])).toBe("#eafd43");
  });

  it('Should throw an error if the user does not enter a number or string as rgb values', () => {
    expect(() => convertRGB(...[0, '1', null])).toThrow('You must only use numbers or strings as rgb values');
    expect(() => convertRGB(undefined)).toThrow('You must only use numbers or strings as rgb values');
    expect(() => convertRGB()).toThrow('You must only use numbers or strings as rgb values');
    expect(() => convertRGB(false, false, false)).toThrow('You must only use numbers or strings as rgb values');
  });

  it('should throw an error if one or more of the values given is above 255', () => {
    expect(() => convertRGB(...['46', '56', '686'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['476', '56', '686'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['476', '576', '6886'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['46', '76', '66'])).not.toThrow('Each value must be between 0 and 255');
  });


  it('should throw an error if one or more of the values given is below 0', () => {
    expect(() => convertRGB(...['-46', '5', '-686'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['-476', '56', '0'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['476', '576', '6886'])).toThrow('Each value must be between 0 and 255');
    expect(() => convertRGB(...['46', '76', '66'])).not.toThrow('Each value must be between 0 and 255');
  });
});

describe('Test the isCorretType() function', () => {
  it('should return true if the argument given is a string', () => {
    expect(isCorrectType('12')).toBeTruthy();
    expect(isCorrectType('')).toBeTruthy();
    expect(isCorrectType('abhjf')).toBeTruthy();
    expect(isCorrectType('{}')).toBeTruthy();
    expect(isCorrectType('(---)')).toBeTruthy();
  });

  it('should return true if the argument given is a number', () => {
    expect(isCorrectType(0)).toBeTruthy();
    expect(isCorrectType(90)).toBeTruthy();
    expect(isCorrectType(-12)).toBeTruthy();
    expect(isCorrectType(33)).toBeTruthy();
    expect(isCorrectType(8)).toBeTruthy();
  });

  it('should return false if the argument is not a number or a string', () => {
    expect(isCorrectType()).toBeFalsy();
    expect(isCorrectType(false)).toBeFalsy();
    expect(isCorrectType(true)).toBeFalsy();
    expect(isCorrectType([])).toBeFalsy();
    expect(isCorrectType(null)).toBeFalsy();
    expect(isCorrectType(undefined)).toBeFalsy();
    expect(isCorrectType(() => {})).toBeFalsy();
  });
});

describe('Test the isValidFloat() function', () => {
  it('should return true if the argument given is an empty string', () => {
    expect(isValidFloat('')).toBeTruthy();
  });

  it('should return true if the argument given is a number higher than 0 and lower than 255', () => {
    expect(isValidFloat(1)).toBeTruthy();
    expect(isValidFloat(220)).toBeTruthy();
    expect(isValidFloat(40)).toBeTruthy();
    expect(isValidFloat(255)).toBeTruthy();
    expect(isValidFloat(2)).toBeTruthy();
    expect(isValidFloat(0)).toBeTruthy();
  });

  it('should return false if the argument given is a negative integer number', () => {
    expect(isValidFloat(-30)).toBeFalsy();
    expect(isValidFloat(-1)).toBeFalsy();
    expect(isValidFloat(-1000)).toBeFalsy();
    expect(isValidFloat(-5)).toBeFalsy();
    expect(isValidFloat(-20)).toBeFalsy();
  });

  it('should return false if the argument given is an integer above 255', () => {
    expect(isValidFloat(256)).toBeFalsy();
    expect(isValidFloat(1000)).toBeFalsy();
    expect(isValidFloat(260)).toBeFalsy();
    expect(isValidFloat(300)).toBeFalsy();
    expect(isValidFloat(999)).toBeFalsy();
  });
  
  it('should return true if the argument given is a valid floating number', () => {
    expect(isValidFloat(20.1)).toBeTruthy();
    expect(isValidFloat(1.1)).toBeTruthy();
    expect(isValidFloat(0.05)).toBeTruthy();
    expect(isValidFloat(244.9)).toBeTruthy();
  });

});

describe('Test the cleanString() function', () => {
  it('should remove any lowercase alphabet letters from a string', () => {
    expect(cleanString('2d62b26a')).toBe('26226');
    expect(cleanString('881jsf')).toBe('881');
    expect(cleanString('oop10d')).toBe('10');
    expect(cleanString('.')).toBe('');
  });

  it('should not remove any characters if all values are numbers', () => {
    expect(cleanString('221')).toBe('221');
    expect(cleanString('551')).toBe('551');
    expect(cleanString('0')).toBe('0');

    expect(cleanString(10)).toBe('10');
    expect(cleanString(22)).toBe('22');
    expect(cleanString(5)).toBe('5');
  });

  it('should remove special characters from a string', () => {
    expect(cleanString('1%^!5$9')).toBe('159');
    expect(cleanString('(142)')).toBe('142');
    expect(cleanString('**3156')).toBe('3156');
  });
});

//.toBe is for numbers and strings and other values
//.toEqual is for lists and objects ({}, [])
//.toStrictEqual is like toEqual but on steroids


  


