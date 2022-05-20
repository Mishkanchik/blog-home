let registerBlock = document.querySelector(".register-block")

function showModalBuyScrol (){
    if(window.pageYOffset> document.body.scrollHeight / 2){

        registerBlock.classList.add("show")
    }
    
}
window.addEventListener("scroll",showModalBuyScrol)

let xBackClick = document.querySelector(".xback")


function clickBack(){

    registerBlock.classList.add("hide")


}

registerBlock.addEventListener("click",clickBack)

const mobileMenu = document.querySelector(".nav-mobile-menu");
const mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
      mainMenu.classList.add("active-menu");
    } else {
      mainMenu.classList.remove("active-menu");
    }
  });
  
