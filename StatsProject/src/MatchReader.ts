import { CSVFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./Utils";
import { MatchResults } from "./MatchResultTypes";

type MatchTypeTuple=[Date,string,string,number,number,MatchResults,string];

export class MatchReader extends CSVFileReader<MatchTypeTuple>{
    matchRow(row:string[]):MatchTypeTuple{
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults,
            row[6]

        ];
    }
}