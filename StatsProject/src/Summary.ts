import { MatchTypeTuple } from "./MatchType"
export interface Analyzer{
    run(matches:MatchTypeTuple[]):string;
} 

export interface OutputTarget{
    print(report:string):void;
}

export class Summary{
    constructor(public analyzer:Analyzer,public outputTarget:OutputTarget){}

    buildAndPrintReport(matches:MatchTypeTuple[]):void{
        const report=this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
} 