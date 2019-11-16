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
if(usersName.value){userINPUT[0]=usersName.value; }   
else{usersName.style.background ="#ff0000"; userINPUT[0]=false; }

const usersBirth = document.querySelector("#birthday");
if(usersBirth.value){ userINPUT[1]=usersBirth.value; }   
else{usersBirth.style.background ="#ff0000"; userINPUT[1]=false; }

const usersGend = document.querySelector("#gender");
if(usersGend.value!=='GENDER'){ userINPUT[2]=usersGend.value; }   
else{usersGend.style.background ="#ff0000"; userINPUT[2]=false;}

const usersGuest = document.querySelector("#guestcount");
if(usersGuest.value!=="How many Guest"){ userINPUT[3]=usersGuest.value; }   
else{usersGuest.style.background ="#ff0000"; userINPUT[3]=false;}

const usersRegist = document.querySelector("#registration");
if(usersRegist.value){ userINPUT[4]=usersRegist.value; }   
else{usersRegist.style.background ="#ff0000"; userINPUT[4]=false; }

return userINPUT ;
};


let FORM = document.querySelector("form") ;
const submitBUTTON = document.querySelector('[type="submit"]') ;
submitBUTTON.addEventListener("click", submissionCLICK =>
{   
    submissionCLICK.preventDefault((validator())) ;
    
    let displayTHIS = {name: userINPUT[0], birthdate: userINPUT[1],
      gender: userINPUT[2], guestCount: userINPUT[3], registration: userINPUT[4]} ;
   // const thisDIV = document.querySelectorAll('[class="card-body"]') ;
    if(userINPUT[0]&&userINPUT[1]&&userINPUT[2]&&userINPUT[3]&&userINPUT[4])
        {FORM.style.display="none" ; console.log('confirmed!');
         let displayUSER = document.createElement("PRE") ;
         displayUSER.innerHTML=("\n\n\t\t\t\t\t\t  Sign-up confirmed!\n\n"
                               +"\n\t\t\t\t\t"+ JSON.stringify(displayTHIS)+ "\n\n\n") ;
         document.body.appendChild(displayUSER);
        }
    
} );






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