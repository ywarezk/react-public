"use strict"

const greetingsArray = [
    'hello', // 5
    'world', // 5
    'foo', // 3
    'bar', // 3
];

// [5,5,3,3]
// module.exports === this
console.log(this);
const greetingLength = greetingsArray.map((singleGreeting) => {
    console.log(this); // function => undefined | window
    // this = {} === module.exports this will be equal to line 12
    return singleGreeting.length;
})

// EventEmitter