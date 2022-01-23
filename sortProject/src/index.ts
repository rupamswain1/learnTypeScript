import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import {CharacterCollection} from './CharacterCollection';

const number=new NumberCollection([11,-10,-77,0,-2,5,99,66]);
const character=new CharacterCollection('rupamSwain');
const sorter=new Sorter(number)
sorter.sort();
console.log(number.data);

const charSorter=new Sorter(character);
charSorter.sort();
console.log(character.data);


