/***
 *
 * ** Using the modulus operator determine if the argument is an even or odd number
 *   if the number is odd return the word 'Odd'
 *   if the number is even return the word 'Even'
 *   @example
 *   isOdd  // 'Odd'
 *   isEven // 'Even'
 *
 *  */

function isEvenOrOdd(number) 
{    let numTYPE = "";
  let  reMainder = number % 2 ;
  if (reMainder === 1) {numTYPE = "Odd" ;}
  else {numTYPE = "Even"} ;
  return numTYPE ;
}

/****
 *  Create a function that returns a function.
 *  The returned function when invoked should say "Second Function"
 *  @example
 *  functionMaker()() // "Second Function"
 *
 */
function functionMaker() 
{
     function newFunct(){ return  "Second Function";}
     return newFunct ;
}

/***
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @example
 *  confirmEnding("Jamal", "l") // true
 *  confirmEnding("Matina", "a") // true
 *  confirmEnding("stacy", "l") // false
 *  confirmEnding("andrea", "a") // true
 *  confirmEnding("Clifford", "ord"); // true
 *
 */

function confirmEnding(str, target) 
{   let compareSPOTS = (str.length) - (target.length) ;
    let stringprime = str.substring(compareSPOTS ) ;
    let boolANS = true ;
    if (stringprime === target) {boolANS = true;}
    else {boolANS = false ;} 
  return boolANS ;
}

module.exports = {
  isEvenOrOdd,
  functionMaker,
  confirmEnding
};
