/**
 * In HTML syntax
 * words
 * js they have a meaning
 * class
 */

/** 
<h1 class="hello"></h1>
class Person {}
*/

// wrong
// React.createElement
const h1 = (
    <h1 class="hello"></h1>
)

// right
const h2 = (
    <h1 className="hello"></h1>
)
