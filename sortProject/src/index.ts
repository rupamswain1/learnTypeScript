import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import {CharacterCollection} from './CharacterCollection';
import { LinkedList } from "./LinkedList";

const number=new NumberCollection([11,-10,-77,0,-2,5,99,66]);
number.sort();
console.log(number.data);
const character=new CharacterCollection('rupamSwain');
character.sort();
console.log(character.data);
const linkedList=new LinkedList()
linkedList.add(5);
linkedList.add(-1);
linkedList.add(6);
linkedList.add(0);
linkedList.sort();
linkedList.print();




