import {OutputTarget} from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget{
    constructor(public filePath:string){};
    print(report:string):void{
       const htmlReport= 
            `<div>
                <h1>Analysis Report</h1>
                <div>${report}</div>
            </div>`;
        fs.writeFileSync(this.filePath,htmlReport);
    }
}