

const h1 = (
    <h1>
        <span>
            hello world
        </span>
    </h1>
)

// function H1() {
//     return (
//         ...
//     )
// }

function Span() {
    
}

// error
const h2 = (
    <H1>
        <Span>
            hello world
        </Span>
    </H1>
)