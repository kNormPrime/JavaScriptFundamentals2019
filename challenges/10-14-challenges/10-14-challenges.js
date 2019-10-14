/**
 * Using the spread operator remove the first  element from the array
 *
 * @param {array} arr
 * @returns {mixed} an array of values with the values with one of the values removed
 *
 * @example removeElement(['one','two','three']) // ['two', 'three']
 */

function removeElement(arr) 
{
  let newARRAY = [ ...arr] ;
  newARRAY.shift() ;
  return  newARRAY ;
}

/**
 * truncate a string
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ...ending
 *
 * @param {string} string
 * @returns Return the truncated string with a ... as the ending
 *
 * @example
 *
 *
 * truncateString("A-tisket a-tasket A green and yellow basket", 8)
 * should return "A-tisket...".
 *
 *  truncateString("A-", 1)should return "A...".
 *
 * truncateString("Peter Piper picked a peck of pickled peppers", 11)
 *  should return "Peter Piper..."
 *
 */

function truncateString(str, num) 
{ //////////////////////////////////
let strArray = str.split("");
let tempArray = [] ;
let nwString = "" ;
if(str.length > num)
{ for(let i =0; i<num; i++)
    {tempArray.push(strArray[i]);}
     nwString = ( tempArray.join("") + `...` ) ;
}
else {  nwString = str ;}
return nwString ;
  /////////////////////////////////////
}

module.exports = {
  removeElement,
  truncateString
};
