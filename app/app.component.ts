import {Component,OnInit} from 'angular2/core';
import {BoardService,Colors} from './board.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>Rucolo</h1>
    <p>Drag and match the colors</p>

    <div *ngFor="#cell of cells">
        {{cell}}
    </div>
    `,
    providers: [BoardService]
})
export class AppComponent implements OnInit {
    public cells: Colors[];

    constructor(private _boardService: BoardService) { }

    ngOnInit() {
        this._boardService.randomize();
        this.cells = this._boardService.cells;
    }
}