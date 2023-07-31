const check = require('../check');

describe('check', () => {

  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate returns true', () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).not.toHaveBeenCalled();
  });

  it('should call onFail when predicate returns false', function () {
    check(() => false, onSuccess, onFail);

    expect(onSuccess).not.toHaveBeenCalled();
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
  });
});
