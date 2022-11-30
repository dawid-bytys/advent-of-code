const getRowsAndColumns = (lines: string[]) => {
  const columns = [];
  const rows = lines
    .slice(2)
    .filter(line => line !== '')
    .map(line => line.replace(/  /g, ' ').trim().split(' '));

  for (let i = 0; i < rows.length; i = i + rows[0].length) {
    for (let j = 0; j < rows[0].length; ++j) {
      columns.push(rows.slice(i, i + rows[0].length).map(row => row[j]));
    }
  }

  return [rows, columns] as const;
};

const evaluateWinnerBoard = (lines: string[]) => {
  const [rows, columns] = getRowsAndColumns(lines);
  const pickedNumbers = lines[0].split(',');
  const usedNumbers = pickedNumbers.splice(0, 5);
  const winners = [];

  for (let i = 0; i < pickedNumbers.length; ++i) {
    const winnerRow = rows.find(row => row.every(cell => usedNumbers.includes(cell)));
    if (winnerRow) {
      winners.push({
        afterNumber: pickedNumbers[i],
        row: winnerRow,
      });
    }

    const winnerColumn = columns.find(column => column.every(cell => usedNumbers.includes(cell)));
    if (winnerColumn) {
      winners.push({
        afterNumber: pickedNumbers[i],
        column: winnerColumn,
      });
    }

    usedNumbers.push(pickedNumbers[i]);
  }

  // to finish
};
