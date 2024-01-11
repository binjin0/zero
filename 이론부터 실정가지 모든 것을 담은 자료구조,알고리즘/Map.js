/*
Map
- 다양한 자료형의 key를 혀용하고, key-value 형태의 자료형을 저장 할 수 있는 Collection
- Map은 Object대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요하다.
- 대표 속성(property) 및 메서드(method)

  생성자 : new Map()
  개수 확인 : Map.size
  요소 추가 : Map.set(key,value)
  요소 접근 : Map.get(key)
  요소 삭제 : Map.delete(key)
  전체 삭제 : Map.clear()
  요소 존재 여부 확인 : Map.has(key)
  그 밖의 메서드 : Map.keys(),Map.values(),Map.entries()
*/

let map = new Map();
map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");

console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.size);

map.clear();
console.log(map);
map.set("name", "alice").set(123, 879).set(false, "bool_type");
console.log(map);

/*
Map 반복문
Collection 객체인 Map이 가지고 있는 iterator 속성을 이용항 for...of 구문을 통해 반복문 수행 가능
*/
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);
for (let item of recipe_juice.keys()) console.log(item);

for (let amount of recipe_juice.values()) console.log(amount);

for (let entity of recipe_juice) console.log(entity);

console.log(recipe_juice);
console.log(recipe_juice.entries());

/**
 Map <-> Object 변환
 Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object간 변환이 가능
 */

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj);
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice);
console.log(recipe_juice_obj);
console.log(recipe_juice_kv);
console.log(recipe_juice_map);
