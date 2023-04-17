
document.addEventListener("DOMContentLoaded", function(){
    let menu1 = document.getElementById("main_matriz_menu1")
    let menu2 = document.getElementById("main_matriz_menu2")
    
    menu1.addEventListener("click", function(){
        this.classList.toggle("active")
    })
    
    menu2.addEventListener("click", function(){
        this.classList.toggle("active")
    })
})

