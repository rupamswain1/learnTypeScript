"use strict";
class Sort {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const temp = this.collection[j];
                if (this.collection[j] > this.collection[j + 1]) {
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
}
const sorter = new Sort([3, 2, 1, -1, 0, 55, 99, -18, -100]);
sorter.sort();
console.log(sorter.collection);
