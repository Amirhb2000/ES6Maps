const map1 = new Map();

// set keys
const key1 = "something",
  key2 = {},
  key3 = function () {};

// set map value
map1.set(key1, "Value of key 1");
map1.set(key2, "Value of key 2");
map1.set(key3, "Value of key 3");

// Get Value
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// count the keys
console.log(map1.size);

// Itrerating maps
// Loop for keys and values with for...of
for (let [key, value] of map1) {
  console.log(`${key}=${value}`);
}

// Loop for keys
for (let key of map1.keys()) {
  console.log(key);
}

// Loop for Values
for (let value of map1.values()) {
  console.log(value);
}

// Loop for keys and values with for...of
map1.forEach((key, value) => {
  console.log(`${key}=${value}`);
});

// Convert to Array
// Array for key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Array for key
const keyArr = Array.from(map1.keys());
console.log(keyArr);

// Array for value
const valArr = Array.from(map1.values());
console.log(valArr);
