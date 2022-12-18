let recom_cards = document.querySelector("#recom_cards");
let shopStory = document.querySelector("#shops_story_cards");
let moreNeed = document.querySelector("#more_need_cards");
let countryLogo = document.querySelector(".india")
let holiday_collection = document.querySelector("#holiday_collection");
let logo = document.querySelector("#logo")

// fetch recomended products data
async function recomended_products() {
  try {
    let recom_request = await fetch("https://fair-rose-bluefish-cuff.cyclic.app/woman-recommanded")
    let res = await recom_request.json()
    let massagedData = res.map((item) => {
      let obj = { ...item }
      obj.title = "";
      return obj;
    })
    Render_Recom_Data(massagedData,"recomClass")
  } catch (error) {
    alert("Bad request")
  }

}
recomended_products()

// fetch shop , story and more products
async function shop_story_products() {
  try {
    let shop_request = await fetch("https://fair-rose-bluefish-cuff.cyclic.app/woman-shops_story")
    if (shop_request.ok) {
      let res = await shop_request.json();
      Render_shopStory_Data(res,"shopClass")
    }else{
      alert("something went wrong")
    }
  } catch (error) {
    alert("Bad request")
  }

}
shop_story_products()


// fetch more you need to see products
async function more_need_products() {
  try {
    let needed_request = await fetch("https://fair-rose-bluefish-cuff.cyclic.app/woman-more_need")
    if(needed_request.ok){
      let res = await needed_request.json();
      Render_moreNeed_Data(res,"needMoreClass")
    }else{
      alert("something went wrong")
    }
  } catch (error) {
    alert("Bad request")
  }
}
more_need_products()


// function to get product in Card Form
function get_products_As_card(data,cls="") {
  return `
    <div class = "${cls}">
        <img  data-id="${data.id}" src="${data.imgURL}" alt="">
        <h4>${data.title}</h4>
    </div>
    
    `
}

// recomanded data render function
function Render_Recom_Data(data,cls) {
  recom_cards.innerHTML = "";
  let newRecomArr = data.map((item) => {
    return get_products_As_card(item,cls)
  })

  recom_cards.innerHTML = newRecomArr.join("");   // Rendered

  let recomDetails = document.querySelectorAll(".recomClass");
  for(let recomDetail of recomDetails){
    
    recomDetail.addEventListener("click",(event)=>{
      let id = event.target.dataset.id;
      window.location.href = `recomanded${id}.html`
    })
  }
}

// shop story render function
function Render_shopStory_Data(data,cls) {
  shopStory.innerHTML = "";
  let newShopStoryArr = data.map((item) => {
    return get_products_As_card(item,cls)
  })

  shopStory.innerHTML = newShopStoryArr.join("");

  let storyShops = document.querySelectorAll(".shopClass");
  for(let shop of storyShops){
    shop.addEventListener("click",(event)=>{
      window.location.href = `./shop_story/shopStory1.html`;
    })
  }

}

// more_need data render function
function Render_moreNeed_Data(data,cls) {
  moreNeed.innerHTML = "";
  let newmoreNeedArr = data.map((item) => {
    return get_products_As_card(item,cls)
  })

  moreNeed.innerHTML = newmoreNeedArr.join("");
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
countryLogo.addEventListener("click", () => {
  let url = "https://www.jcrew.com/in/r/context-chooser";
  window.open(url, "_blank")
})

// holiday collection
holiday_collection.addEventListener("click", () => {
  window.location.href = "holiday_collection/holiday_collection.html";
})

// go to home page through logo
logo.addEventListener("click",()=>{
  window.location.href = "../index.html"
})