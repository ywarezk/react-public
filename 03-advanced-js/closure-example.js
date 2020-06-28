// closure

// where will i look for a variable

function hello() {
    const message = 'hello';
    
    return function foo() {
        // const message = 'bar'
        console.log(message); // bar
    }
}

// closest to me - does the variable exists in my function? 
// look for the variable in external function
// global

let stam = 'hello';

setTimeout(() => {
    console.log(stam); // hello
    stam = 'foo';
}, 1000);

setTimeout(() => {
    console.log(stam); // ? foo
}, 2000)