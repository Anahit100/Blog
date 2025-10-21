// 1. 
function roundToTwo(num) {
  return Number(num.toFixed(2));
}

// 2. 
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

// 3. 
function numberLength(num) {
  return num.toString().length;
}

// 4.
function getIntegerPart(num) {
  return Math.trunc(num);
}

// 5.
function toUpperCase(str) {
  return str.toUpperCase();
}

// 6. 
function containsWord(str, word) {
  return str.includes(word);
}

// 7. 
function replaceSpaces(str) {
  return str.replace(/ /g, "_");
}

// 8. 
function firstAndLastThree(str) {
  return str.slice(0, 3) + str.slice(-3);
}

// 9. 
function trimString(str) {
  return str.trim();
}

// 10. 
function stringLength(str) {
  return str.length;
}

// 11.
function addElement(arr, el) {
  arr.push(el);
  return arr;
}

// 12. 
function removeLastElement(arr) {
  arr.pop();
  return arr;
}

// 13. 
function findFirstGreaterThanTen(arr) {
  return arr.findIndex(x => x > 10);
}

// 14. 
function filterEvenNumbers(arr) {
  return arr.filter(x => x % 2 === 0);
}

// 15. 
function multiplyByTwo(arr) {
  return arr.map(x => x * 2);
}

// 16. 
function sumArray(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
}

// 17. 
function containsElement(arr, el) {
  return arr.includes(el);
}

// 18. 
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 19. 
function sliceArray(arr) {
  return arr.slice(1, 4);
}

// 20. 
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// 21. 
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// 22. 
function getObjectValues(obj) {
  return Object.values(obj);
}

// 23. 
function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}

// 24.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 25.
function getEntries(obj) {
  return Object.entries(obj);
}
 