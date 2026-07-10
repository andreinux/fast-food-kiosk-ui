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



let hotdogBtn = document.querySelector("#hotdog-btn");

hotdogBtn.addEventListener("click", ()=> {
    showSection("hotdogs");
})

let friesBtn = document.querySelector("#fries-btn");

friesBtn.addEventListener("click", ()=> {
    showSection("friesSection");
})

let drinksBtn = document.querySelector("#drinks-btn");

drinksBtn.addEventListener("click", ()=> {
    showSection("drinksSection");
})


let backtoMenuBtn = document.querySelectorAll(".backto-menubtn");

backtoMenuBtn.forEach(button=> {
    button.addEventListener("click" , ()=> {
        showSection("categories");  
    })
})


let CBdisplayquantity = document.querySelector("#cheeseBurger-quantity");
let cheeseBurgerItembtn = document.querySelector("#cheeseBurger-itembtn");
 let cheeseBurgerQuantity = Number(CBdisplayquantity.textContent);

cheeseBurgerItembtn.addEventListener("click" , ()=> {
    cheeseBurgerQuantity += 1;
    CBdisplayquantity.textContent = cheeseBurgerQuantity;

})



let martiniDisplayQuantity = document.querySelector("#martini-quantity");
let martiniItembtn = document.querySelector("#martini-itembtn");
let martiniQuantity = Number(martiniDisplayQuantity.textContent);

martiniItembtn.addEventListener("click", ()=> {
    martiniQuantity += 1;
    martiniDisplayQuantity.textContent = martiniQuantity;
})

let hdDisplayquantity = document.querySelector("#hotdog-quantity");
let hotdogItembtn = document.querySelector("#hotdog-itembtn");
let hotdogQuantity = Number(hdDisplayquantity.textContent);

hotdogItembtn.addEventListener("click", ()=> {
    hotdogQuantity += 1;
    hdDisplayquantity.textContent = hotdogQuantity;
})


let flDisplayQuantity = document.querySelector("#footlong-quantity");
let footlongItembtn = document.querySelector("#footlong");
let flQuantity = Number(flDisplayQuantity.textContent);

footlongItembtn.addEventListener("click" ,()=> {
    flQuantity += 1;
    flDisplayQuantity.textContent = flQuantity; 
})

let SfriesDisplayQuantity = document.querySelector("#Sfries-quantity");
let SfriesItembtn = document.querySelector("#friesSmall-itembtn");
let SfriesQuantity = Number(SfriesDisplayQuantity.textContent);

SfriesItembtn.addEventListener("click", ()=> {
    SfriesQuantity += 1;
    SfriesDisplayQuantity.textContent = SfriesQuantity;
})


let LfriesDisplayQuantity = document.querySelector("#Lfries-quantity");
let LfriesItembtn = document.querySelector("#friesLarge-itembtn");
let LfriesQuantity = Number(LfriesDisplayQuantity.textContent);

LfriesItembtn.addEventListener("click", ()=> {
    LfriesQuantity += 1;
    LfriesDisplayQuantity.textContent = LfriesQuantity;
})



let itDisplayQuantity = document.querySelector("#icedTea-quantity");
let icedteaItembtn = document.querySelector("#icedtea-itembtn");
let itQuantity = Number(itDisplayQuantity.textContent);

icedteaItembtn.addEventListener("click", ()=> {
    itQuantity += 1;
    itDisplayQuantity.textContent = itQuantity;
}) 



let mochaDisplayQuantity = document.querySelector("#mocha-quantity");
let mochaItembtn = document.querySelector("#mocha-itembtn");
let mochaQuantity = Number(mochaDisplayQuantity.textContent);

mochaItembtn.addEventListener("click", ()=> {
    mochaQuantity += 1;
    mochaDisplayQuantity.textContent = mochaQuantity;
})


let taroDisplayQuantity = document.querySelector("#taro-quantity");
let taroItembtn = document.querySelector("#taro-itembtn");
let taroQuantity = Number(taroDisplayQuantity.textContent);

taroItembtn.addEventListener("click", ()=> {
    taroQuantity += 1;
    taroDisplayQuantity.textContent = taroQuantity;
})


let matchaDisplayQuantity = document.querySelector("#matcha-quantity");
let matchaItembtn = document.querySelector("#matcha-itembtn");
let matchaQuantity = Number(matchaDisplayQuantity.textContent);

matchaItembtn.addEventListener("click", ()=> {
    matchaQuantity += 1;
    matchaDisplayQuantity.textContent = matchaQuantity;
})