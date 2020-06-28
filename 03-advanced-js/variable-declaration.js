

// Variable declaration

// var/let/const variableName = someValue

const hello = 'world';

var foo;
foo = 'bar';

let myBoolean = true;

hello = 'bar' // wrong only one assignment

myBoolean = []; // ok
foo = {} // ok

// scope
// where can i use that variable

// let/const - scope {}

if (true) {
    let lurem = 'ipsum';
}

lurem = new Error();

// scope var
// where can I use variables that are declared with var

// var scope is functional

function helloWorld() {
    var message = 'hello';

    for(let i = 0; i < 10; i++) {
        var message = 'another message'
    }

    console.log(message); // another message
}

/*
|      | scope      | number of assignments
| var  | functional | infinite
| let  | {}         | infinite
| const| {}         | 1

*/