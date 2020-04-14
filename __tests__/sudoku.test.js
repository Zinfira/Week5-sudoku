import { Sudoku } from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should check if array for row is empty', () => {
    var sudoku = new Sudoku()
    expect(sudoku.row).toEqual([])
  });

  test('should check if array for column is empty', () => {
    var sudoku = new Sudoku()
    expect(sudoku.column).toEqual([])
  });
});