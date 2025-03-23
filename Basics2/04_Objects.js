//singleton

// const obj = new Object()  //singleton object
const obj1 = {}           // non-singleton object

obj1.name = "ronny"
obj1.age = 3
obj1.isLog = false
// console.log(obj);
// console.log(obj1);

const user = {
    email : "fjewr@gmail.com",
    username : {
        name: {
            first : "aman",
            last : "dixit"
        }
    }
}
// console.log(user.username.name.first);

const q1 = {1:"a", 2:"b"}
const q2 = {3:"c", 4:"d"}

// const q3 = {q1, q2}
// console.log(q3);

const q4 = Object.assign({}, q1, q2) // merges all the elements of objects sources to target that is {}
// console.log(q4);

const q5 = {...q1, ...q2} //spread operates like we did it in arrays // MOSTLY WE ARE GOING TO USE THIS ONE
// console.log(q5);

// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('email'));


// through datatbase , data come sin araays of objects

const a1 = [
    {
        user:"dfs",
        re: 3
    },
    {

    },

]

a1[1].user //loop through all the objects of the array

const course = {
    corsename: "DE",
    courseID: 12,
    coursefaculty: "me"
}

console.log(course.coursefaculty)

const {coursefaculty} = course             // de-structuring
console.log(coursefaculty);              

const {coursefaculty: CF} = course         // de-structuring
console.log(CF);
