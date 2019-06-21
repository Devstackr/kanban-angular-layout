import { Column } from './column.model';

export class Board {
    constructor(public name: string, public columns: Column[]) {}
}