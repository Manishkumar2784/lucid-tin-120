let cartData = JSON.parse(localStorage.getItem("cart-products"));

let mainCont = document.querySelector("#left");


Display_data(cartData)

function Display_data(data){
    let cartData = JSON.parse(localStorage.getItem("cart-products"));
    // cart quantity
    let cart_qty = document.querySelector(".qty");
    cart_qty.innerText = cartData.length;


    

    // cart hover quantity indicator

    // let cartIndicator = document.querySelector("#cartQtyHover");
    // cartIndicator.innerText = cartData.length;




    // cart Total

    let totalAmt = cartData.reduce((acc,item)=>{
        return acc+item.price
    },0)

    let cartAmt = document.querySelector("#cartAmt");
    cartAmt.innerText = "INR "+ totalAmt;


    let newArr = data.map((item)=>{
        return product_cards(item)
    })

    mainCont.innerHTML = newArr.join("");

    
}







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
            <p class="delete" onclick = "removeProduct(${data.id})"><u> remove </u></p>
        </div>
        <div id="price"> INR ${data.price}</div>
    </div>
    
    `
}

function removeProduct(id){
    let cartData = JSON.parse(localStorage.getItem("cart-products"));
    let newCart = cartData.filter((item)=>{
        return item.id !=id;
    })

    let updatedCart = localStorage.setItem("cart-products",JSON.stringify(newCart));
    Display_data(JSON.parse(localStorage.getItem("cart-products")))

}




let checkout = document.querySelector("#checkout");
checkout.addEventListener("click",()=>{
    window.location.href = "../Payment/payment.html"
})