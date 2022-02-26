export type Year = 2020 | 2021;
export type Day =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;

export type Action = 'forward' | 'up' | 'down';

export interface DayTwoInput {
  readonly action: Action;
  readonly units: number;
}

export interface BingoBoard {
  columns: number[][];
  rows: number[][];
}
