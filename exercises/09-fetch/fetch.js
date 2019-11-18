/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */

//////////////// code start here /////////////////////////
const fetchDOG = () => 
{ ////////// fetchDOG  //////////////////

 fetch('https://dog.ceo/api/breeds/image/random', { method: 'GET'} )
  .then(response => response.json())
  

  .then(response => 
   {
   let dogPIC = document.querySelector("#image") ;
   let dogDATA = response.message ;
   dogPIC.src =  dogDATA ;
   
   let describeDOG = document.querySelector("h2") ;
   describeDOG.innerText =   "Another fine pup..." ;
   })

  .catch(error =>
   {
    const dogPOO = '<div class="text-danger">Sorry, ' +
            'but an unexpected error occurred in doggie search. '+error+'</div>';
    document.querySelector('.container').insertAdjacentHTML('beforeend', dogPOO);
   });
};  ////////end fetchDOG ////////////////

const daButton = document.querySelector("button") ;
daButton.addEventListener("click", ()=>{ fetchDOG() ; } ) ;  


//////////////// code end here  //////////////////////////