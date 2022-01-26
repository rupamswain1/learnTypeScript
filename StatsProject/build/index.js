"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResultTypes_1 = require("./MatchResultTypes");
const reader = new CsvFileReader_1.CSVFileReader('football.csv');
reader.read();
let count = 0;
for (let data of reader.data) {
    if ((data[1] === 'Man United' && data[5] === MatchResultTypes_1.MatchResults.HomeWin) || (data[2] === 'Man United' && data[5] === MatchResultTypes_1.MatchResults.AwayWin)) {
        count++;
    }
}
console.log(`Man United has won ${count} matches`);
