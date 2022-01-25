"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map(data => data.split(','));
let count = 0;
for (let data of matches) {
    if ((data[1] === 'Man United' && data[5] === 'H') || (data[2] === 'Man United' && data[5] === 'A')) {
        count++;
    }
}
console.log(`Man United has won ${count} matches`);
