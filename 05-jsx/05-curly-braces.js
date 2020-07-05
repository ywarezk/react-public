

// in jsx we can use {}
// { jsExpression }
// { 1 + 20 }

const h1 = (
    <h1>
        {
            Math.random() + 10
        }
    </h1>
)

const eventDemo = (
    <button onClick={someFunction}>
        click me
    </button>
)

// can I place any js expression I want? 
// No

// the js expression you put has to return value

// error
const badExample = (
    <h1>
        {
            if (Math.random() > 0.5) {
                return 'large';
            } else {
                return 'small';
            }
        }
    </h1>
)

const goodExample = (
    <h1>
        {
            (function() {
                if (Math.random() > 0.5) {
                    return 'large';
                } else {
                    return 'small';
                }
            })()            
        }
    </h1>
)

const goodExample1 = (
    <h1 >
        {
            Math.random() > 0.5 ? 'large' : 'small'         
        }
    </h1>
)

// the type of value we are returning in the js

// 1. if attribute / props <h1 onClick={} > the js expression has to match what the property expects to get
// 2. what about between tags? what kind of type can we enter? 
//     - String
//     - Number -> toString() 
//     - Component / jsx
//     - Boolean : true || falsy = null, undefined, "", false
//     - Array of elements from the above


const jsxBetweenBrackets = (
    <h1>
        {
            Math.random() > 0.5 ? <span>large</span> : <strong>small</strong>
        }
    </h1>
)

const todoItems = [
    'Walk Piglet and Sweetness',
    'Feed piglet and sweetness',
    'Play Piglet and Sweetness',
    true,
    undefined,
    42
]

/*
 => [
    <li>Walk Piglet and Sweetness</li>,
    <li>Walk Piglet and Sweetness</li>,
    <li>Walk Piglet and Sweetness</li>,
    true,
    undefined,
    <li>42</li>,
]
*/

const jsxArray = (
    <h1>
        {
            todoItems
        }
    </h1>
);

const todoElements = (
    <ul>
        {
            todoItems.map((todoItem, index) => {
                if (typeof todoItem !== 'Number' && typeof todoItem !== 'String') {
                    return todoItem;
                }
                return (
                    <li key={index}>
                        {
                            todoItem
                        }
                    </li>
                )
            })
        }
    </ul>
);

const todoElements2 = (
    <ul>
        {
            (function Chanie() {
                const result = [];
                let counter = 0;
                for (let item of todoItems) {
                    // ...
                    result.push(
                        <li key={counter}>{item}</li>
                    )
                    counter++;
                }
                return result;
            })()
        }
    </ul>
)

// todoItems.forEach



// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )