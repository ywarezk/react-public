function hello(event) {
    // ...
}

const h1 = (
    <h1 onclick="hello">click me</h1>
)

const h1Right = (
    <h1 onClick={hello} >click me</h1>
)

function submitFunction(event) {    
    event.preventDefault();
}

const formsSubmit = (
    <form onSubmit={submitFunction}>
        <button type="submit">
            send the form
        </button>
    </form>
);
