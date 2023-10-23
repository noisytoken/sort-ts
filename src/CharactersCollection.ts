import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
    data: string;

    constructor(data: string){
        super();
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) : void{
        const chars = this.data.split("");
        const tmp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = tmp;

        this.data = chars.join("");
    }

}