// if

// single line if

// someCondition ? returnSomeValue : returnSomeOtherValue;

const hello = Math.random() > 0.5 ? 'world' : 'foo bar';

// window.stamGlobal != undefined
// window.stamGlobal != null

// falsy = false | null | undefined
// if stamGlobal is falsy place the default value hello
const foo = window.stamGlobal || 'hello';
const foo = window.stamGlobal ? window.stamGlobal : 'hello';

// if stamGlobal is defined place the value 10
// truthy = true, class, object, "sdfsdf"
const stam = window.stamGlobal && 10; 
const stam = window.stamGlobal ? 'hello' : window.stamGlobal;

// if () {} else {}