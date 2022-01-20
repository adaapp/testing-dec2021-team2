import './Form';
import convertRGB from './formFunctions';

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
});

//.toBe is for numbers and strings and other values

//.toEqual is for lists and objects ({}, [])
//.toStrictEqual is like toEqual but on steroids



  


