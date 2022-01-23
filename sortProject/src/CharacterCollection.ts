import { sortable } from "./Sorter";

export class CharacterCollection implements sortable{
    constructor(public data:string){}
    get length(){
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase()>this.data[rightIndex].toLocaleLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const stringArray=this.data.split('');
        const leftHand=stringArray[leftIndex];
        stringArray[leftIndex]=stringArray[rightIndex];
        stringArray[rightIndex]=leftHand;
        this.data=stringArray.join('')
    }

}