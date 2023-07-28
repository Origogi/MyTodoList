const Calculator = require('../calculator.js');

describe('Calculator', () => {

  let cal;

  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0',  () =>  {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(10);
    expect(cal.value).toBe(10);
  });

  it('clears', () => {
    cal.set(10);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add (1)', function () {
    cal.set(10);
    cal.add(10);
    expect(cal.value).toBe(20);
  });

  it('add should throw error when value is greater than 100', () => {
    cal.set(100);
    expect(() => cal.add(1)).toThrow();
  });

  // it('add (2)', function () {
  //   cal.set(10);
  //   cal.add(1000);
  //   expect(cal.value).toBe(1020);
  // });

  it('subtract', function () {
    cal.set(10);
    cal.subtract(5);
    expect(cal.value).toBe(5);
  });

  it('multiply', function () {
    cal.set(10);
    cal.multiply(2);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it(' 0 / 0 === NaN', () => {
      cal.set(0);
      cal.divide(0);
      expect(cal.value).toBeNaN();
    });

    it('4/4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });

});
