import '@testing-library/jest-dom';
import changeArea from '../../actions/filterAction';

describe('Filter action', () => {
  const filter = changeArea('American');
  it('Should return CHANGE_AREA', () => {
    expect(filter.type).toBe('CHANGE_AREA');
  });

  it('Should return area', () => {
    expect(filter.area).toEqual('American');
  });
});
