// if

// single line if

// someCondition ? returnSomeValue : returnSomeOtherValue;

const hello = Math.random() > 0.5 ? 'world' : 'foo bar';

// window.stamGlobal != undefined
// window.stamGlobal != null

// falsy = false | null | undefined
// if stamGlobal is falsy place the default value hello
const foo = window.stamGlobal || 'hello';

// if stamGlobal is defined place the value 10
const stam = window.stamGlobal && 10; 

// if () {} else {}