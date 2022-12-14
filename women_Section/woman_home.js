let recom_cards = document.querySelector("#recom_cards");
let shopStory = document.querySelector("#shops_story_cards");
let moreNeed = document.querySelector("#more_need_cards");
let countryLogo = document.querySelector(".india")

// fetch recomended products data

let recommanded= [
    {
      id: 1,
      title: "Fair Isle mockneck pullover sweater",
      nextPage:"fair_Isle.html",
      price: 13561.00,
      disPrice:4774.00,
      productDetail: "This festive, intricate knit was born on the Shetland island of, you guessed it, Fair Isle in Northern Scotland. Since then, it's gained fans in everyone from après-skiiers to holiday-party attendees. This sweater features a cozy, relaxed fit and a mockneck for extra warmth. Plus, it was crafted at a Fair Trade Certified™ factory that provides additional income and better conditions for the people who work there.",
      imgURL:"https://www.jcrew.com/s7-img-facade/BM179_SR0406",
      img1:"https://www.jcrew.com/s7-img-facade/BM179_SR0404_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2:"https://www.jcrew.com/s7-img-facade/BM179_SR0404_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    },
    {
      id: 2,
      title: "Cocoon sweater-blazer",
      nextPage:"cocoon_Blazer.html",
      price: 24618.00,
      disPrice: 19638.00,
      productDetail: "Somewhere between a jacket and a cardigan, this easy style is perfect for days that feel somewhere between seasons. With all the polish of your favorite blazer, and crafted from supersoft wool with just a hint of stretch, it's a top contender for most-worn layer this f.",
      imgURL:"https://www.jcrew.com/s7-img-facade/BA551_SU7517",
      img1:"https://www.jcrew.com/s7-img-facade/BA551_SU7517_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2:"https://www.jcrew.com/s7-img-facade/BA551_SU7517_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    },
    {
      id: 3,
      title: "Eco dreamiest long-sleeve pajama set",
      nextPage:"pazama.html",
      price: 15213.00,
      disPrice: 10786.00,
      productDetail: "Dreamy...dreamier...dreamiest. Meet our softest, drapiest, sustainable-est sleep collection yet. This set is made with LENZING™ ECOVERO™ Viscose that's sourced from responsibly managed forests and produced with less water and lower emissions. So you can sleep better at night—in more ways than one.",
      imgURL:"https://www.jcrew.com/s7-img-facade/BA006_BL8133",
      img1: "https://www.jcrew.com/s7-img-facade/BA006_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2: "https://www.jcrew.com/s7-img-facade/BA006_BL8133_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    },
    {
      id: 4,
      title: "Feather-trim cotton poplin button-up shirt with collar",
      nextPage:"feather_Trim_shirt.html",
      price: 27398.00,
      disPrice: 23522.00,
      productDetail: "Bring the drama to your next holiday party, without ruffling any feathers but your own, in this classic button-up, featuring feather-trimmed cuffs. By buying cotton products from J.Crew, you're supporting our investment in Better Cotton's mission to help cotton communities survive and thrive while protecting and restoring the environment. This product is sourced through a system of mass balance and therefore may not contain Better Cotton.",
      imgURL:"https://www.jcrew.com/s7-img-facade/BD772_WT0002",
      img1: "https://www.jcrew.com/s7-img-facade/BD772_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2: "https://www.jcrew.com/s7-img-facade/BD772_WT0002_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    },
    {
      id: 5,
      title: "Gwyneth slip skirt",
      nextPage:"slip_skirt.html",
      price: 19086.00,
      disPrice: 15212.00,
      productDetail: "The beloved '90s style is back, and more versatile than ever. Ours features an easy elastic waistband, and hits slightly below the knee for a modern look.",
      imgURL:"https://www.jcrew.com/s7-img-facade/AC467_BK0001",
      img1: "https://www.jcrew.com/s7-img-facade/AC467_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2: "https://www.jcrew.com/s7-img-facade/AC467_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    },
    {
      id: 6,
      title: "Oversized cashmere wrap",
      nextPage:"cashmere_wrap.html",
      price: 27384.00,
      disPrice: 18602.00,
      productDetail: "This luxe cashmere accessory is one you'll have for years. . . It's perfect for layering underneath your winter coat when it's extra-cold out or for wrapping up in during a long flight. We're proud to support responsible cashmere production through our partnership with the Aid by Trade Foundation (AbTF), a nonprofit that promotes sustainable agricultural development across the globe. As the foundation's first U.S. member, we source cashmere that is certified to the AbTF's The Good Cashmere Standard®, which ensures the welfare of the cashmere goats, protects natural resources and improves the working conditions of farmers and farmworkers in Inner Mongolia.",
      imgURL:"https://www.jcrew.com/s7-img-facade/K2532_BL8133",
      img1: "https://www.jcrew.com/s7-img-facade/K2532_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0",
      img2: "https://www.jcrew.com/s7-img-facade/K2532_BL8133_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0"
    }
  ]

  
function recomended_products(){
    let data = [...recommanded];
    let massagedData = data.map((item)=>{
        let obj = {...item}
        obj.title = "";
        return obj;
    })
    Render_Recom_Data(massagedData)
    
}
recomended_products()

let shops_story = [
    {
      id: 1,
      title: "The Ski Shop",
      nextPage:"skiShop.html",
      imgURL: "https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img0.jpg"
    },
    {
      id: 2,
      title: "The Sun Shop",
      nextPage:"sunShop.html",
      imgURL: "https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img1_new.jpg"
    },
    {
      id: 3,
      title: "Festive pj sets",
      nextPage:"festiveSets.html",
      imgURL: "https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img2.jpg"
    },
    {
      id: 4,
      title: "New sweaters, new gifts",
      nextPage:"sweaters_Gifts.html",
      imgURL: "https://www.jcrew.com/brand_creative/2022/202214-Dec2/flyout/2022dec2_1213_flyouts_w_img3.jpg"
    }
  ]

// fetch shop , story and more products
function shop_story_products(){
    Render_shopStory_Data(shops_story)

}
shop_story_products()


// fetch more you need to see products

let more_need = [
    {
      id: 1,
      title: "Shop Women's Sweaters",
      imgURL: "https://www.jcrew.com/s7-img-facade/BD613_RD6052_m",
      nextPage: "womenSweater.html"
    },
    {
      id: 2,
      title: "Shop Women's Shirts & Tops",
      imgURL: "https://www.jcrew.com/s7-img-facade/BN161_YD2172_m",
      nextPage: "womenShirts.html"
    },
    {
      id: 3,
      title: "Shop Women's T-shirts & Tank Tops",
      imgURL: "https://www.jcrew.com/s7-img-facade/BM312_PT3361_m",
      nextPage: "women_TShirts_TankTop.html"
    },
    {
      id: 4,
      title: "Shop Women's Dresses & Jumpsuits",
      imgURL: "https://www.jcrew.com/s7-img-facade/BM874_YD2455_m",
      nextPage: "women_JumpSuits.html"
    },
    {
      id: 5,
      title: "Shop Women's Blazers",
      imgURL: "https://www.jcrew.com/s7-img-facade/BM557_YD2455_m",
      nextPage: "women_Blazers.html"
    },
    {
      id: 6,
      title: "Shop Women's Pants",
      imgURL: "https://www.jcrew.com/s7-img-facade/BM751_BK0001_m",
      nextPage: "women_Pants.html"
    }
  ]

function more_need_products(){
    Render_moreNeed_Data(more_need)
}
more_need_products()


// function to get product in Card Form
function get_products_As_card(data){
    return `
    <div>
        <img src="${data.imgURL}" alt="">
        <h4>${data.title}</h4>
    </div>
    
    `
}

// recomanded data render function
function Render_Recom_Data(data){
    recom_cards.innerHTML = "";
    let newRecomArr = data.map((item)=>{
        return get_products_As_card(item)
    })

    recom_cards.innerHTML = newRecomArr.join("");
}

// shop story render function
function Render_shopStory_Data(data){
    shopStory.innerHTML = "";
    let newShopStoryArr = data.map((item)=>{
        return get_products_As_card(item)
    })

    shopStory.innerHTML = newShopStoryArr.join("");
}

// more_need data render function
function Render_moreNeed_Data(data){
    moreNeed.innerHTML = "";
    let newmoreNeedArr = data.map((item)=>{
        return get_products_As_card(item)
    })

    moreNeed.innerHTML = newmoreNeedArr.join("");
}

// footer contact links social media handles

function insta(){
    let url= "https://www.instagram.com/jcrew/"
    window.open(url,"_blank")
    
}
function fb(){
    let url = "https://www.facebook.com/jcrew"
    window.open(url, "_blank")
    
}
function twitter(){
    let url = "https://twitter.com/jcrew"
    window.open(url, "_blank")
    
}
function linkedin(){
    let url = "https://www.linkedin.com/company/j-crew/"
    window.open(url, "_blank")
    
}
function pinterest(){
    let url = "https://www.pinterest.com/jcrew/"
    window.open(url, "_blank")
    
}
function youTube(){
    let url = "https://www.youtube.com/user/jcrewinsider"
    window.open(url, "_blank")
    
}
countryLogo.addEventListener("click",()=>{
    let url = "https://www.jcrew.com/in/r/context-chooser";
    window.open(url, "_blank")
})
