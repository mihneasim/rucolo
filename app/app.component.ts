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
    <a href="#">Shift </a>
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
}