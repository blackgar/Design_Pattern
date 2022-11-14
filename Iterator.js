const map_structure = new Map();
map_structure.set("a", 1);
map_structure.set("b", 2);
map_structure.set("c", 3);

const set_structure = new Set();
set_structure.add(1);
set_structure.add(2);
set_structure.add(3);
for (let a of map_structure) console.log(a);
for (let a of set_structure) console.log(a);
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
// 1
// 2
// 3
