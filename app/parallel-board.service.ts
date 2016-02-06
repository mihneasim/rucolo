import {Injectable} from 'angular2/core';
import {Board, Colors} from 'board.interface';

@Injectable()
export class ParallelBoardService implements Board {
  public cellsAsRows: [Colors[]] = [[], [], []];
  public cellsAsCols: [Colors[]] = [[], [], []];

  constructor() { this.randomize(); }

  randomize() {
    let seed = [Colors.RED, Colors.RED, Colors.RED,
      Colors.YELLOW, Colors.YELLOW, Colors.YELLOW,
      Colors.BLUE, Colors.BLUE, Colors.BLUE
    ];

    for (var i = seed.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = seed[i];
      seed[i] = seed[j];
      seed[j] = temp;
    }

    seed.forEach(function(currentValue, index) {
      this.cellsAsRows[~~(index / 3)].push(currentValue);
      this.cellsAsCols[index % 3].push(currentValue);
    })

  }

  getCell = (index: number) => this.cellsAsCols[index % 3][~~(index / 3)];

  barrelRow(row: number, direction: number) {
    var temp: Colors;

    if (direction === -1) {
      // to the left
      temp = this.cellsAsRows[row].shift();
      this.cellsAsRows[row].push(temp);

      temp = this.cellsAsCols[0][row];
      this.cellsAsCols[0][row] = this.cellsAsCols[1][row];
      this.cellsAsCols[1][row] = this.cellsAsCols[2][row];
      this.cellsAsCols[2][row] = temp;

    } else if (direction === 1) {
      // to the right
      temp = this.cellsAsRows[row].pop();
      this.cellsAsRows[row].splice(0, 0, temp);

      temp = this.cellsAsCols[2][row];
      this.cellsAsCols[2][row] = this.cellsAsCols[1][row];
      this.cellsAsCols[1][row] = this.cellsAsCols[0][row];
      this.cellsAsCols[0][row] = temp;
    }
  }

  barrelCol(col: number, direction: number) {
    var temp: Colors;

    if (direction === -1) {
      // upwards
      temp = this.cellsAsCols[col].shift();
      this.cellsAsCols[col].push(temp);

      temp = this.cellsAsRows[0][col];
      this.cellsAsRows[0][col] = this.cellsAsRows[1][col];
      this.cellsAsRows[1][col] = this.cellsAsRows[2][col];
      this.cellsAsRows[2][col] = temp;

    } else if (direction === 1) {
      // downwards
      temp = this.cellsAsCols[col].pop();
      this.cellsAsCols[col].splice(0, 0, temp);

      temp = this.cellsAsRows[2][col];
      this.cellsAsRows[2][col] = this.cellsAsRows[1][col];
      this.cellsAsRows[1][col] = this.cellsAsRows[0][col];
      this.cellsAsRows[0][col] = temp;
    }
  }

}
