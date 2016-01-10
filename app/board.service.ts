import {Injectable} from 'angular2/core';

export enum Colors { RED, YELLOW, BLUE }

@Injectable()
export class BoardService {
    public cells: Colors[];

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

        this.cells = seed;
    }
}