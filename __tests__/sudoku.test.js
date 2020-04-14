import { Sudoku } from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should check if array for row is empty', () => {
    var sudoku = new Sudoku()
    expect(sudoku.row).toEqual([])
  });
//Test 2
  test('should check if array for column is empty', () => {
    var sudoku = new Sudoku()
    expect(sudoku.column).toEqual([])
  });

  test('number push into empty array', () => {
    var sudoku = new Sudoku()
    sudoku.addToRows(1)
    expect(sudoku.row).toEqual([1])
  });
});