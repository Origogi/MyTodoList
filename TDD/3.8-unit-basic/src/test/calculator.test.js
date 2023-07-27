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

  it('add', function () {
    cal.set(10);
    cal.add(10);
    expect(cal.value).toBe(20);
  });

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
