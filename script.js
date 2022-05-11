let registerBlock = document.querySelector(".register-block")

function scroll50 (){
    
    registerBlock.classList.add("show")
    
}

window.addEventListener("scroll",scroll50 )



let xBackClick = document.querySelector(".xback")


function clickBack(){

    registerBlock.classList.add("hide")


}

registerBlock.addEventListener("click",clickBack)