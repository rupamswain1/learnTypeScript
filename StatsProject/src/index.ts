import { CSVFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const csvFileReader=new CSVFileReader('football.csv');
const matchReader=new MatchReader(csvFileReader);
matchReader.load();

const summary=new Summary(new WinsAnalyzer('Man United'),new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
