/**
 * As a engineer, I would like to have my form validated so the information is safe and correct.
*  
*  All the fields should be required!!

*  If a field is left empty on form submission, 
*  the form will display a red box indicating to the user that there has been an error.
*  
*  If the form is valid, the form should submit(vanish or disappear), and the user should see a confirmation of information they filled out. (Developers Discretion on how the information is presented to the user)
*/
//////////////////////// code below ////////////////////////////

let userINPUT = [] ;

const validator = ()=>
{
const usersName = document.querySelector("#name");
if(usersName.value)
{   // userINPUT.push(usersName.target.value);
   //  console.log((usersName.value));}
    userINPUT.push(usersName.value);}   
else{console.log('make name red'); userINPUT.push('RED');}

const usersBirth = document.querySelector("#birthday");
if(usersBirth.value){ userINPUT.push(usersBirth.value); }   
else{console.log('make birth red'); userINPUT.push('RED');}

const usersGend = document.querySelector("#gender");
if(usersGend.value){ userINPUT.push(usersGend.value); }   
else{console.log('make gender red'); userINPUT.push('RED');}

const usersGuest = document.querySelector("#guestcount");
if(usersGuest.value){ userINPUT.push(usersGuest.value); }   
else{console.log('make guests red'); userINPUT.push('RED');}

const usersRegist = document.querySelector("#registration");
if(usersRegist.value){ userINPUT.push(usersRegist.value); }   
else{console.log('make registration red'); userINPUT.push('RED');}




console.log((userINPUT));
};

/* usersName.addEventListener("input", nameTYPED => {
 userINPUT.push(nameTYPED.target.value);  
 console.log(nameTYPED.target.value);  }) ; */


const submitBUTTON = document.querySelector('[type="submit"]') ;
submitBUTTON.addEventListener("click", submissionCLICK =>
{   console.log("HI");
   
    submissionCLICK.preventDefault(console.log(validator())) ;
   // validator() ;
   // console.log(userINPUT);
} );

/* const submitBUTTON = document.querySelector("#button") ;
submitBUTTON.addEventListener("form", submissionCLICK =>
{   console.log("HI");
   // submissionCLICK.preventDefault() ;
   // validator() ;
   // console.log(userINPUT);
} ); */

/* const requiredFORM = document.querySelector("#form") ;
requiredFORM.addEventListener("button", submissionCLICK =>
{   console.log("HI");
   submissionCLICK.preventDefault() ;
   validator() ;
   console.log(userINPUT);
} ); */




/////////////////////// code above /////////////////////////
/*
* Bonus Points
*  1) In addition to adding a class when a field is not valid display a message requesting the user to enter their information. 
      (Example Please Under Name)
*  2) Create a button that resets the form. 


* Developer notes
*  1) An error class named .error you can use this class to apply the proper css to an invalid element.
*  2) You can edit this form however you see fit as the engineer to achieve your goals. (i.e add ids or additional classes if needed)
*/
/// here we go....