const sym = Symbol("dfsdfadsf")

const obj = {
    name: "dfs",
    age: 12,
    email: "dfvva@f.cpm",
    "full": "true",
    [sym]: "dfsdsfvsfvs"
}

console.log(obj.age)
console.log(obj["full"]);
console.log(obj[sym]);

obj.age = 234
console.log(obj)
Object.freeze(obj)
obj.age = 1
console.log(obj);

