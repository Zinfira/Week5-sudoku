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

  test('number push into empty row array', () => {
    var sudoku = new Sudoku()
    sudoku.addToRows(1)
    expect(sudoku.row).toEqual([1])
  });

  test('number push into empty column array', () => {
    var sudoku = new Sudoku()
    sudoku.addToColumns(3)
    expect(sudoku.row).toEqual([3])
  });
});