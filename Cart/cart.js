let cartData = JSON.parse(localStorage.getItem("cart-products"))

let mainCont = document.querySelector("#left");


Display_data(cartData)

function Display_data(data){
    let newArr = data.map((item,i)=>{
        return product_cards(item)
    })

    mainCont.innerHTML = newArr.join("");

    
}

// cart quantity
let cart_qty = document.querySelector(".qty");
cart_qty.innerText = cartData.length;

// cart Total

let totalAmt = cartData.reduce((acc,item)=>{
    return acc+item.price
},0)

let cartAmt = document.querySelector("#cartAmt");
cartAmt.innerText = "INR "+ totalAmt;





// get product as card
function product_cards(data){
    return `
    <hr>
    <div id="item">
        <div>
            <img src="${data.imgURL || data.thumbnail}" alt="">
        </div>
        <div>
            <p>${data.title}</p>
            <p>Item BM867</p>
            <p class="delete"><u> remove </u></p>
        </div>
        <div id="price"> INR ${data.price}</div>
    </div>
    
    `
}

let checkout = document.querySelector("#checkout");
checkout.addEventListener("click",()=>{
    window.location.href = "../Payment/payment.html"
})