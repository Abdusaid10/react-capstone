import { CHANGE_AREA } from './types';

const changeArea = area => ({
  type: CHANGE_AREA,
  area,
});

export default changeArea;
