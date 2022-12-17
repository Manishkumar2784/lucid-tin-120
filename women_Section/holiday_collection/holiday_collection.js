
let cont = document.querySelector("#container")
let logo = document.querySelector("#logo")

async function holiday_deals(){
    try {
        let holiday_deals_request = await fetch("https://fair-rose-bluefish-cuff.cyclic.app/woman-holiday-products")
        if(holiday_deals_request.ok){
            let res = await holiday_deals_request.json();
            renderData(res)

            // sort functioning
            let sort =document.querySelector("#sort_by_price");
            sort.addEventListener("change",(event)=>{
                let changesSort = sort.value;
                
                if(changesSort=="LTH"){
                    let newArr = [...res];
                    newArr.sort(function(a,b){
                        return a.price - b.price
                    })
                    renderData(newArr)
                }
                if(changesSort=="HTL"){
                    let newArr = [...res];
                    newArr.sort(function(a,b){
                        return b.price - a.price
                    })
                    renderData(newArr)
                }
                if(changesSort==""){
                    renderData(res);
                }


                
            })
        }
    } catch (error) {
        alert("Bad request")
    }
}
holiday_deals();


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

            fetch(`https://fair-rose-bluefish-cuff.cyclic.app/woman-holiday-products/${id}`)
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
        <img src="${data.imgURL}" alt="">
        <p>${data.title}</p>
        <p>INR ${data.price}</p>
        <button data-id=${data.id}>Add to Cart</button>
    </div>
    
    `
}



// footer contact links social media handles

function insta() {
    let url = "https://www.instagram.com/jcrew/"
    window.open(url, "_blank")
  
  }
  function fb() {
    let url = "https://www.facebook.com/jcrew"
    window.open(url, "_blank")
  
  }
  function twitter() {
    let url = "https://twitter.com/jcrew"
    window.open(url, "_blank")
  
  }
  function linkedin() {
    let url = "https://www.linkedin.com/company/j-crew/"
    window.open(url, "_blank")
  
  }
  function pinterest() {
    let url = "https://www.pinterest.com/jcrew/"
    window.open(url, "_blank")
  
  }
  function youTube() {
    let url = "https://www.youtube.com/user/jcrewinsider"
    window.open(url, "_blank")
  
  }
  let countryLogo = document.querySelector(".india")
  countryLogo.addEventListener("click", () => {
    let url = "https://www.jcrew.com/in/r/context-chooser";
    window.open(url, "_blank")
  })

//   go to home page through logo
// logo.addEventListener("click",()=>{
//     window.location.href = "../Home_page/homepage.html"
// })