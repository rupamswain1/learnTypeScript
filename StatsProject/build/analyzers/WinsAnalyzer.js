"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchResultTypes_1 = require("../MatchResultTypes");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let data of matches) {
            if ((data[1] === 'Man United' && data[5] === MatchResultTypes_1.MatchResults.HomeWin) || (data[2] === 'Man United' && data[5] === MatchResultTypes_1.MatchResults.AwayWin)) {
                wins++;
            }
        }
        return `${this.team} has won ${wins} matches`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
