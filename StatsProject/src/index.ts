import { CSVFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
//import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader=new CSVFileReader('football.csv');
const matchReader=new MatchReader(csvFileReader);
matchReader.load();

const summary=new Summary(new WinsAnalyzer('Man United'),new HtmlReport('./analysisReports.html'));
summary.buildAndPrintReport(matchReader.matches);
