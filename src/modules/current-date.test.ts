import { getCurrentDate } from './current-date';

describe('CurrentDate module', () => {
  it('should return correct date', () => {
    const date = new Date();
    const result = getCurrentDate(date);
    expect(result).toBe(date.toISOString());
  });
});
