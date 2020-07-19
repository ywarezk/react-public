// Promise

// promise helps us deal with async code

// async code is code that will be called in the future

// the shouter is promise

// you can attach listeners to the shout

const promiseExample = fetch('...');
// promiseExample:

promiseExample.then(
    (response) => {

    }
)

promiseExample.then((response) => {

});

/**
 *
 * @returns {Promise}
 */
async function example() {
    // response: Response
    const response = await promiseExample;
    const data = await response.json()
    return data;
}

const allPromise = example();
allPromise.then((data) => {

})