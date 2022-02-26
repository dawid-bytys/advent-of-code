import type { BingoBoard } from '../../types';

const transposeMatrix = (matrix: number[][]) => {
  return matrix[0].map((_, idx) => matrix.map(row => row[idx]));
};

export const formatBoards = (data: string) => {
  const boards = data
    .split('\n\n')
    .splice(1)
    .map(board =>
      board
        .split('\n')
        .map(row => row.replace(/\s+/g, ' ').trim().split(' ').map(Number)),
    );

  return boards.map((board, idx) => ({
    id: idx,
    rows: board,
    columns: transposeMatrix(board),
  })) as BingoBoard[];
};

export const getNextNums = (data: string) => {
  return data.split('\n')[0].split(',').map(Number);
};

// *
export const findFirstWinner = (boards: BingoBoard[], nums: number[]) => {
  let filteredBoards = boards;
  let foundFirstWinner!: BingoBoard;
  let lastNum!: number;
  let isWinnerByColumn = false;
  let bingoResult: number;

  for (const num of nums) {
    const hasBoardWinByColumn = filteredBoards.filter(board =>
      board.columns.find(col => col.every(el => el === -1)),
    );
    const hasBoardWinByRow = filteredBoards.filter(board =>
      board.rows.find(row => row.every(el => el === -1)),
    );
    if (hasBoardWinByColumn.length) {
      foundFirstWinner = hasBoardWinByColumn[0];
      isWinnerByColumn = true;
      break;
    }
    if (hasBoardWinByRow.length) {
      foundFirstWinner = hasBoardWinByRow[0];
      break;
    }

    filteredBoards = filteredBoards.map(board => ({
      ...board,
      columns: board.columns.map(col => col.map(el => (el === num ? -1 : el))),
      rows: board.rows.map(row => row.map(el => (el === num ? -1 : el))),
    }));
    lastNum = num;
  }

  if (isWinnerByColumn) {
    bingoResult =
      foundFirstWinner.columns
        .flatMap(col => col)
        .filter(el => el !== -1)
        .reduce((x, y) => x + y) * lastNum;
  } else {
    bingoResult =
      foundFirstWinner.rows
        .flatMap(row => row)
        .filter(el => el !== -1)
        .reduce((x, y) => x + y) * lastNum;
  }

  return bingoResult;
};