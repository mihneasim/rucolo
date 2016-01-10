import {Component,OnInit} from 'angular2/core';
import {BoardService,Colors} from './board.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>Rucolo</h1>
    <p>Drag and match the colors</p>

    <div class="canvas">
        <div *ngFor="#cell of cells; #i = index"
            id="cell{{i}}" [ngClass]="['cell', 'row' + floor(i/3), 'col' + i%3]">
            {{cell}}
        </div>
    </div>
    <button (click)="barrelRow(0, 1)" href="#">barrel 1st row</button>
    <button (click)="barrelRow(1, 1)" href="#">barrel 2nd row</button>
    <button (click)="barrelRow(2, 1)" href="#">barrel 3rd row</button>

    <button (click)="barrelCol(0, 1)" href="#">barrel 1st col</button>
    <button (click)="barrelCol(1, 1)" href="#">barrel 2nd col</button>
    <button (click)="barrelCol(2, 1)" href="#">barrel 3rd col</button>
    `,
    styleUrls: ['app/app.styles.css'],
    providers: [BoardService]
})
export class AppComponent implements OnInit {
    public cells: Colors[];
    public floor = Math.floor;

    constructor(private _boardService: BoardService) { }

    ngOnInit() {
        this._boardService.randomize();
        this.cells = this._boardService.cells;
    }

    barrelRow(row: number, direction: number) {
        this._boardService.barrelRow(row, direction);
    }

    barrelCol(col: number, direction: number) {
        this._boardService.barrelCol(col, direction);
    }
}