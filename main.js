let orderBtn = document.querySelector("#order-btn");


let welcome = document.querySelector("#welcome");

// show and hide section function
function showSection(id){
    let sections = document.querySelectorAll(".sections");

    sections.forEach(section => {
        section.setAttribute("hidden", "true");
    })
    let active = document.getElementById(id);
    active.removeAttribute("hidden");
    }

orderBtn.addEventListener("click", ()=> {
   showSection("categories");
})




let hamburgerBtn = document.querySelector("#hamburger-btn");

hamburgerBtn.addEventListener("click", ()=> {
    showSection("burger-items");
});




