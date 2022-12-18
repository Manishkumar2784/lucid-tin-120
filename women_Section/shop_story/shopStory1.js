let cont = document.querySelector("#container")
let logo = document.querySelector("#logo")

async function shop_story(){
    try {
        let shop_story_request = await fetch("https://dummyjson.com/products")
        if(shop_story_request.ok){
            let res = await shop_story_request.json();
            console.log(res)
            renderData(res.products)

            // sort functioning
            let sort =document.querySelector("#sort_by_price");
            sort.addEventListener("change",(event)=>{
                let changesSort = sort.value;
                
                if(changesSort=="LTH"){
                    let newArr = [...res.products];
                    newArr.sort(function(a,b){
                        return a.price - b.price
                    })
                    renderData(newArr)
                }
                if(changesSort=="HTL"){
                    let newArr = [...res.products];
                    newArr.sort(function(a,b){
                        return b.price - a.price
                    })
                    renderData(newArr)
                }
                if(changesSort==""){
                    renderData(res.products);
                }


                
            })
        }
    } catch (error) {
        alert("Bad request")
    }
}
shop_story();


let cartItem = JSON.parse(localStorage.getItem("cart-products")) || [];
function renderData(data){
    cont.innerHTML = "";
    let new_data = data.map((item)=>{
        return get_products_As_card(item)
    })
    cont.innerHTML = new_data.join("");

    let product_cards = document.querySelectorAll(".cards button");
    for(button of product_cards){
        button.addEventListener("click",(event)=>{
            let id = event.target.dataset.id;

            fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                cartItem.push(data)
                localStorage.setItem("cart-products",JSON.stringify(cartItem))
                alert(`Hurray ! ${data.title} Added to cart`)
            })
            .catch(err => alert(err))
        })
    }
}


// function to get product in Card Form
function get_products_As_card(data){
    return `
    <div class="cards">
        <img src="${data.images[0]}" alt="">
        <p>${data.title}</p>
        <p>INR ${data.price}</p>
        <button data-id=${data.id}>Add to Cart</button>
    </div>
    
    `
}

logo.addEventListener("click",()=>{
  window.location.href = "../../index.html"
})