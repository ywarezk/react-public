/**
 * I want to use React to draw <h1>hello world</h1>
 */

// import {createElement} from 'react';

// <h1>hello world</h1>
// const h1 = document.createElement('h1');
// h1.innerText = 'hello world with js';

const container = document.getElementById('root');
// container.appendChild(h1);

// Component
// <h1><span><u>hello world with underline</u></span></h1>

// <h1><span><u>hello world with underline</u></span></h1>
// const h1 = React.createElement(
//     'h1', 
//     null, 
//     React.createElement(
//         'span',
//         null,
//         React.createElement(
//             'u', 
//             null, 
//             'hello world with underline'
//         )
// ));

// JSX
// we use to describe our components
// const h1 = (
//     <h1>
//         <span>
//             <u>
//                 hello world with underline
//             </u>
//         </span>
//     </h1>
// );

function HelloWorld() {
    return (
        <h1>
            <span>
                <u>
                    hello world with underline
                </u>
            </span>
        </h1>
    )
}

// React.createElement(HelloWorld) // <h1>...</h1>
//

ReactDOM.render(<HelloWorld />, container);

// React you create a virtual dom
// React.createElement

// react is in charge to take virtual dom update real dom
// react is updating the real dom with minimum changed, uniting changes, not refreshing

/*
function NavigationBar() {
    return (
        ...
    )
}

function Header() {
    return (
        <header>
            <NavigationBar />
        </header>
    )
}
function LoginForm() {
    return (
        ...
    )
}

function Footer() {
    return (
        <footer>
            ...
        </footer>
    )
}

function LoginPage() {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
            <Footer />
        </div>
    )
}
*/