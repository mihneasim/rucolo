export enum Colors { RED, YELLOW, BLUE }

export interface Board {

  randomize(): void;
  barrelRow(row: number, direction: number): void;
  barrelCol(row: number, direction: number): void;
  getCell(index: number): Colors;
}