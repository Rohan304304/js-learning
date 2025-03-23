const arr1 = ["1", "2", "3"]
const arr2 = ["4", "5","6"]

// arr1.push(arr2)
// console.log(arr1); // it push arr2 array an an elemt in the arr1 array

// arr1.concat(arr2)
// console.log(arr1)

const arr3 = arr1.concat(arr2)// this is perfectly joins two array
// console.log(arr3);

//push method actually push new elemts in the existing arrray
//but concat methos pushes new elemens while original array remains unaffected

const arr4 = [...arr1, ...arr2]
// console.log(arr4)
// above method is called spread and a very easy and used way to join two or more arrays

const arr5 = [1, 2, 3, 4, [34, 23], [23, 100], 12345, 42475]
// console.log(arr5.flat(Infinity))
// if there is an array in which it has elements as single digits, strings or even more arrays inside it.
// so if we want to make that array whaich will have only single elemnts and no more arryas inside it then we can use flat()

// console.log(Array.isArray("djcn"))
// console.log(Array.from("fss413"));
// console.log(Array.of(arr1, arr2,arr3,arr4,arr5));
// console.log(Array.from({name: "dsffs"}));

const obj = {name: "df", age: 24}
console.log(Array.from(Object.values(obj)));



