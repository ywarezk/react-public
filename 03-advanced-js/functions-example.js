// functions example

// lambda function / arrow function

const stam = (arg1, arg2) => {

}

const stam1 = arg1 => {
    return 10;
}

const stam2 = arg1 => 10

stam2('hello');

// this

// window.helloWorld
function helloWorld() {
    // what will this be equal to
    console.log(this);
}

// helloWorld();
// window.helloWorld()

const a = {stam: helloWorld}
a['stam']();


console.log(this);
const helloWorld2 = () => console.log(this);

// function sayHello()
// this function this will be dynamic and it depends who the object that called the function

// () => {}
// this is static and will always be equal what is above the function (where the function is defined)

