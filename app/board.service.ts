import {Injectable} from 'angular2/core';
import {Board, Colors} from 'board.interface';

@Injectable()
export class BoardService implements Board {
  public cells:Colors[];

  constructor() {
    this.randomize();
  }

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

    this.cells = seed;
  }

  getCell = (index:number) => this.cells[index];

  barrelRow(row:number, direction:number) {
    var temp:Colors;
    var start = row * 3;
    if (direction === -1) {
      temp = this.cells[start];
      this.cells[start] = this.cells[start + 1];
      this.cells[start + 1] = this.cells[start + 2];
      this.cells[start + 2] = temp;
    } else if (direction === 1) {
      temp = this.cells[start + 2];
      this.cells[start + 2] = this.cells[start + 1];
      this.cells[start + 1] = this.cells[start];
      this.cells[start] = temp;
    }
  }

  barrelCol(col:number, direction:number) {
    var temp:Colors;
    if (direction === -1) {
      temp = this.cells[col];
      this.cells[col] = this.cells[col + 3];
      this.cells[col + 3] = this.cells[col + 6];
      this.cells[col + 6] = temp;
    } else if (direction === 1) {
      temp = this.cells[col + 6];
      this.cells[col + 6] = this.cells[col + 3];
      this.cells[col + 3] = this.cells[col];
      this.cells[col] = temp;
    }
  }

}