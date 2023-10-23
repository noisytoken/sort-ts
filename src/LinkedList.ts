import { Sorter } from "./Sorter";

class Node2 {
    value: number;
    next: Node2 | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

}

export class LinkedList extends Sorter {
    head: Node2 | null;
    constructor() {
        super();
        this.head = null; 
    }

    add(num: number) : void {
        const newNode = new Node2(num);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let p = this.head;

        while(p.next){
            p = p.next;
        }

        p.next = newNode;
    }

    get length(): number{
        if(!this.head){
            return 0;
        }

        let count = 0;
        let p: Node2 | null = this.head;

        while(p){
            p =  p.next;
            count++;
        }

        return count;
    }
    
    at(index: number): Node2{
        if(!this.head){
            throw new Error("Index out of bounds");
        }   

        let count = 0;
        let node : Node2 | null = this.head;

        while(node){
            if(count === index){
                return node;
            }

            count++;
            node = node.next;
        }

        throw new Error("Index out of bounds");
    }

    compare(leftIndex: number, rightIndex: number) : boolean{
        if(!this.head){
            throw new Error("List is empty");
        }

        return this.at(leftIndex).value > this.at(rightIndex).value;
    }

    swap(leftIndex: number, rightIndex: number){
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp =  leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    }

    print() : void{
        if(!this.head){
            return;
        }

        let node: Node2 | null = this.head;

        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

}