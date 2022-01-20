describe('smoke test', () => {
    test('passes when value is equal to one',() => {
        expect(1).toEqual(1);
    }) 
    test('passes when value is NaN',() => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
        expect(typeof NaN).toBe('number');
    });
  });
