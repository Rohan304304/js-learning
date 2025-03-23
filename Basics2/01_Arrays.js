const arr = [1, 2, 3, 4]
// console.log(typeof arr);

arr.push(10)
// console.log(arr)

arr.unshift(12)
// console.log(arr);

arr.shift()
// console.log(arr)
// console.log(typeof arr)
// console.log(arr.includes(200))

const arr1 = arr.join()
// console.log(arr1);
// console.log(typeof arr1)

//SPLICE and SLICE

console.log("A", arr)

const arr2 = arr.slice(1,4)
console.log(arr2)
console.log("B", arr)

const arr3 = arr.splice(1,4)
console.log(arr3)
console.log("C", arr)
