export type Action = 'forward' | 'up' | 'down';

export interface DayTwoInput {
  readonly action: Action;
  readonly units: number;
}

export interface BingoBoard {
  readonly columns: number[][];
  readonly rows: number[][];
}
