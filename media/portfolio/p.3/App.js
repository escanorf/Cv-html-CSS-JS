// fonction affichage
// 1er barre
function myFunction() {
    const snackbar = document.getElementById("snackbar")
  
    snackbar.classList.toggle("show");
   
    setTimeout(function(){
      snackbar.classList.toggle("show");
    }, 3000)
  }


// 2eme barre
function myFunctions() {
    const snackbar1 = document.getElementById("snackbar1")
  
    snackbar1.classList.toggle("show");
   
    setTimeout(function(){
      snackbar1.classList.toggle("show");
    }, 3000)
  }


