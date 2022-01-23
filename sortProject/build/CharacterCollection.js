"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const stringArray = this.data.split('');
        const leftHand = stringArray[leftIndex];
        stringArray[leftIndex] = stringArray[rightIndex];
        stringArray[rightIndex] = leftHand;
        this.data = stringArray.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
