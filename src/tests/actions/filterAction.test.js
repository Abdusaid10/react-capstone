import '@testing-library/jest-dom'; 
import changeArea from '../../actions/filterAction';

describe('Filter action', () => {
  const areasList = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'Dutch',
    'Egyptian',
    'French',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Unknown',
    'Vietnamese',
  ];
  const filter = changeArea('American');
  it('Should return CHANGE_AREA', () => {
    expect(filter.type).toBe('CHANGE_AREA');
  });

  it('Should return area', () => {
    expect(filter.area).toEqual('American');
  });
});
