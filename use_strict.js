/**
 * "use strict" : has Three benefits:
 *  01- Force us to use variables that declared with var keyword.
 *  02- don't allow us to use another keyword from next javascript version(like class, let ....etc) as variables
 *  03- U can't delete variables or function in use strict mode
*/

// "use strict";

/* Benefit 01 */

var theVal = 0;
// notice we  didn't declare thVal with var
// so if we use "use strict" then will have error : Uncaught ReferenceError: thVal is not defined
thVal = 5;

if(theVal > 0){
  console.log('hello there');  // false cuz theVal = 0
}



/* Benefit 02 */
var let = "my name";
console.log(let);


/* Benefit 03 */

var father = 'father name'
delete father;

