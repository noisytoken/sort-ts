import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumberCollection";

import { Sorter, Sortable,  } from "./Sorter";

const numbers = new NumberCollection([100, 10, 3, -5, 0]);
const characters = new CharactersCollection("zyx");
const list = new LinkedList();
list.add(100);
list.add(-1);
list.add(5);
list.add(10);


// const sorter1 = new Sorter(numbers)
numbers.sort();
console.log(numbers.data);

// const sorter2 = new Sorter(characters)
characters.sort();
console.log(characters.data);

// const sorter3 = new Sorter(list)
list.sort();
console.log(list.print());
