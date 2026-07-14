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



//array of objects for each item
let menuArray = [
cheeseBurgerObj = {
    item: "CheeseBurger",
    price:30,
    quantity: 0,
},
martiniObj ={
    item: "Martini Burger",
    price:50,
    quantity: 0,
},
hotdogObj ={
    item: "Cheesy Hotdog",
    price:39,
    quantity: 0,
},
footLongObj ={
    item: "Footlong",
    price:49,
    quantity: 0,
},
SfriesObj ={
    item: "Fries Small",
    price:30,
    quantity: 0,
},
LfriesObj ={
    item: "Fries Large",
    price:50,
    quantity: 0,
},
teaObj ={
    item: "Iced Tea",
    price:25,
    quantity: 0,
},
mochaObj ={
    item: "Iced Mocha Latte",
    price:79,
    quantity: 0,
},
taroObj ={
    item: "Taro Milk Tea",
    price:79,
    quantity: 0,
},
matchaObj ={
    item: "Matcha",
    price:79,
    quantity: 0,
}
]

//item button hnadlers
let CBdisplayquantity = document.querySelector("#cheeseBurger-quantity");
let cheeseBurgerItembtn = document.querySelector("#cheeseBurger-itembtn");
 

cheeseBurgerItembtn.addEventListener("click" , ()=> {
    
    cheeseBurgerObj.quantity += 1;
    CBdisplayquantity.textContent = cheeseBurgerObj.quantity;
})



let martiniDisplayQuantity = document.querySelector("#martini-quantity");
let martiniItembtn = document.querySelector("#martini-itembtn");

martiniItembtn.addEventListener("click", ()=> {
    martiniObj.quantity += 1;
    martiniDisplayQuantity.textContent = martiniObj.quantity;
})

let hdDisplayquantity = document.querySelector("#hotdog-quantity");
let hotdogItembtn = document.querySelector("#hotdog-itembtn");

hotdogItembtn.addEventListener("click", ()=> {
    hotdogObj.quantity +=1;
    hdDisplayquantity.textContent = hotdogObj.quantity;
})


let flDisplayQuantity = document.querySelector("#footlong-quantity");
let footlongItembtn = document.querySelector("#footlong");

footlongItembtn.addEventListener("click" ,()=> {
    footLongObj.quantity += 1;
    flDisplayQuantity.textContent = footLongObj.quantity; 
})

let SfriesDisplayQuantity = document.querySelector("#Sfries-quantity");
let SfriesItembtn = document.querySelector("#friesSmall-itembtn");


SfriesItembtn.addEventListener("click", ()=> {
    SfriesObj.quantity += 1;
    SfriesDisplayQuantity.textContent = SfriesObj.quantity;
})


let LfriesDisplayQuantity = document.querySelector("#Lfries-quantity");
let LfriesItembtn = document.querySelector("#friesLarge-itembtn");

LfriesItembtn.addEventListener("click", ()=> {
    LfriesObj.quantity += 1;
    LfriesDisplayQuantity.textContent = LfriesObj.quantity;
})



let itDisplayQuantity = document.querySelector("#icedTea-quantity");
let icedteaItembtn = document.querySelector("#icedtea-itembtn");

icedteaItembtn.addEventListener("click", ()=> {
    teaObj.quantity += 1;
    itDisplayQuantity.textContent = teaObj.quantity;
}) 



let mochaDisplayQuantity = document.querySelector("#mocha-quantity");
let mochaItembtn = document.querySelector("#mocha-itembtn");

mochaItembtn.addEventListener("click", ()=> {
    mochaObj.quantity += 1;
    mochaDisplayQuantity.textContent = mochaObj.quantity;
})


let taroDisplayQuantity = document.querySelector("#taro-quantity");
let taroItembtn = document.querySelector("#taro-itembtn");

taroItembtn.addEventListener("click", ()=> {
    taroObj.quantity += 1;
    taroDisplayQuantity.textContent = taroObj.quantity;
})


let matchaDisplayQuantity = document.querySelector("#matcha-quantity");
let matchaItembtn = document.querySelector("#matcha-itembtn");

matchaItembtn.addEventListener("click", ()=> {
    matchaObj.quantity += 1;
    matchaDisplayQuantity.textContent = matchaObj.quantity;
})

let addToOrderBtn = document.querySelectorAll(".add-to-orderBtn");

addToOrderBtn.forEach(button => {
    button.addEventListener("click" , ()=> {
        showSection("categories");
    })
})



let orderArray = []
let orderDisplay = document.querySelector("#order-display");

//checkout section
let checkoutBtn = document.querySelector("#checkout-btn");

checkoutBtn.addEventListener("click", ()=> {
    showSection("checkout-section");
    
   orderArray = menuArray.filter(item=> item.quantity > 0);
   console.log(orderArray);

   orderArray.forEach(order=> {
    let orderCard = document.createElement("div");
    orderCard.classList.add("orderCard");

    let item = document.createElement("p");
    item.textContent =  order.item;
    item.classList.add("item");
    orderCard.appendChild(item);

    
    let price = document.createElement("p");
    price.textContent = "Price: " + order.price;
    price.classList.add("price");
    orderCard.appendChild(price);


    let quantity = document.createElement("p");
    quantity.textContent = "Quantity: " + order.quantity;
    quantity.classList.add("quantity");
    orderCard.appendChild(quantity);

    let subtotal = document.createElement("p");
    subtotal.classList.add("subtotal");
    subtotal.textContent = "Subtotal: " + order.price * order.quantity;
    orderCard.appendChild(subtotal);

    orderDisplay.appendChild(orderCard);

    });
})

const addMorebtn = document.querySelector("#add-morebtn");

addMorebtn.addEventListener("click", ()=> {
    orderArray = [];
    orderDisplay.textContent = "";  
})

let cancelBtn = document.querySelectorAll("#cancelBtn");

cancelBtn.forEach(btn=> {
    btn.addEventListener("click" , ()=> {
    showSection("welcome");

   
    menuArray.forEach(item=> {
        item.quantity = 0;
    })

    //reset all quantity displays
     CBdisplayquantity.textContent = 0;
    martiniDisplayQuantity.textContent = 0;
    hdDisplayquantity.textContent = 0;
    flDisplayQuantity.textContent = 0;
    SfriesDisplayQuantity.textContent = 0;
    LfriesDisplayQuantity.textContent = 0;
    itDisplayQuantity.textContent = 0;
    mochaDisplayQuantity.textContent = 0;
    taroDisplayQuantity.textContent = 0;
    matchaDisplayQuantity.textContent = 0;
     

    orderArray=[];
    orderDisplay.textContent="";

    console.log(orderArray);
})
});