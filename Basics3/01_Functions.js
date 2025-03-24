function numbers(){       //simple function
    console.log("1");
    console.log("2");
}
// numbers()


function add(num1, num2){
    if(typeof(num1)==="number" && typeof(num2)==="number"){   // "===" strict equality chech.Vhecks both value and typeof
       console.log(num1 +  num2)
    }
    else{
       console.log("Invalid");
        
    }
}

// add(1,2)

function aded(q1, q2){         
    console.log(q1+q2);
    
}

// const rs =aded(9, 10)             //  wrong because insise function console log gave the answer 
// console.log(rs);                  // but in this line the console log never passed the answer to the variable "rs"
    


function adds(n1, n2) {
    // let n = n1 + n2     //no extra variable created
    // return n

    return n1 + n2
}
const r = adds(1, 2)
// console.log(`Result: ${r}`);
// console.log("result:", r);



function CalCartPrice(...num){   // rets operator
    return num
}
console.log(CalCartPrice(2, 3))

const obj = {
    user: "rohan",
    age: 20
}

function retrive(object){                // make sure you are passing object only that's why people prefer Typecript because 
    console.log(`User is ${object.user} and age is ${object.age}`);    // it can check type and in js you have to wriet extra code for same
    
}

retrive(obj)

//OR

retrive({
    user: "fdj",                                // just different methods
    age: 324
})


const arr = [100, 200, 300, 400]           // arrays in function

function obtain(Array){
    return Array[2]
}
console.log(obtain(arr));
console.log(obtain([100, 200, 300, 400]));

