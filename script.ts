let openBtn = document.querySelector(".open") as HTMLButtonElement;
let closeBtn = document.querySelector(".close") as HTMLButtonElement;
let sideContainer = document.querySelector(".site-options") as HTMLElement;

let cartBtn = document.querySelector(".cart-btn") as HTMLButtonElement;
let popUpContainer = document.querySelector(".pop-up") as HTMLElement;

openBtn?.addEventListener("click", () =>{
    sideContainer?.classList.add("show-side")
})
closeBtn?.addEventListener("click", () =>{
    sideContainer?.classList.remove("show-side")
})

cartBtn?.addEventListener("click", () =>{
    popUpContainer?.classList.toggle("show-pop-up")
})



let minBtn = document.querySelector(".min")
let numberOfItems = document.querySelector(".p-number") 
let plusBtn = document.querySelector(".plus")

let items: number = 0 ;

let cartContent = document.querySelector(".pop-up-container")
let cartItems = document.querySelector(".cart-content")



if(localStorage.getItem("item")) {

    items = Number(localStorage.getItem("item"));
    if (cartItems) {
        cartItems.textContent = items.toString();
    }
    let tPrice = items * 125;
        console.log(tPrice)
        cartContent!.innerHTML = `<div class="pop-up-product">
        <img src="/images_e.product/image-product-1-thumbnail.jpg" alt="">
        <div class="p-info">
            <p class="p-p-title">fall limited edition sneakers</p>
            <span>$125.00 x ${items}</span> <span class="total">$${tPrice}.00</span>
        </div>
        <button class="remove">
            <img src="/images_e.product/icon-delete.svg" alt="">
        </button>
    
        </div>
        <button class="checkout">
            checkout
        </button>`;
        


}

plusBtn?.addEventListener("click",() => {
    items++;
    numberOfItems!.textContent = items.toString()

})
minBtn?.addEventListener("click",() => {
    // items--;
    items = Math.max(0, --items);
    numberOfItems!.textContent = items.toString()

})

let addToCartBtn = document.querySelector(".add") ;

const addToLocalStorage = (item) => {
    window.localStorage.setItem("item",item)
}



addToCartBtn?.addEventListener("click", () => {

    

    if (cartItems) {
        
        cartItems.textContent = items.toString();
    }
    addToLocalStorage(items);
    if(items > 0){
        let tPrice = items * 125;
        console.log(tPrice)
        cartContent!.innerHTML = `<div class="pop-up-product">
        <img src="/images_e.product/image-product-1-thumbnail.jpg" alt="">
        <div class="p-info">
            <p class="p-p-title">fall limited edition sneakers</p>
            <span>$125.00 x ${items}</span> <span class="total">$${tPrice}.00</span>
        </div>
        <button class="remove">
            <img src="/images_e.product/icon-delete.svg" alt="">
        </button>
        
        </div>
        <button class="checkout">
            checkout
        </button>`;
        let removeBtn = document.querySelector(".pop-up-product .remove")
    console.log(removeBtn)
    removeBtn!.addEventListener("click", () => {
        
        if (cartItems) {
            cartItems.textContent = "0";
        }
            cartContent!.innerHTML = `<p class="empty-card">Your cart is empty</p>`
            addToLocalStorage(0)
    })
        
        }
})

    // let removeBtn = document.querySelector(".pop-up-product .remove")
    // console.log(removeBtn)
    // removeBtn!.addEventListener("click", () => {
        
    //     if (cartItems) {
    //         cartItems.textContent = "0";
    //     }
    //         cartContent!.innerHTML = `<p class="empty-card">Your cart is empty</p>`
    //         addToLocalStorage(0)
    // })
    
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
var productImg = document.getElementById("img") as HTMLImageElement
console.log(productImg.src)


const images = [
    {
        src: '/images_e.product/image-product-1.jpg'
    },
    {
        src: "/images_e.product/image-product-2.jpg"
    },
    {
        src: "/images_e.product/image-product-3.jpg"
    },
    {
        src: "/images_e.product/image-product-4.jpg"
    },
]


let i = 0;

function getImageSource() {
    if (i < 0) {
        i = images.length - 1;
    } else if (i > images.length - 1) {
        i = 0;
    }

    const src = images[i];
    return src;
}






rightBtn?.addEventListener("click", () =>{
    let {src} = getImageSource()
    productImg.src = `${src}`
    console.log(`${src}`)
    console.log({src})
    i++
    
})


leftBtn?.addEventListener("click", () =>{
    let {src} = getImageSource()
    productImg.src = `${src}`
    i--
    
})




let thumbPictures = document.querySelector(".product-thumb");

if (thumbPictures) {
    thumbPictures.addEventListener("click", (e) => {
        let target = e.target as HTMLElement;
    
        if (!target) {
            console.error("Unable to retrieve target from event");
            return;
        }
    
        let imgId = target.dataset.id ;
        if (!imgId) {
            console.error("Unable to retrieve image id from dataset");
            return;
        }
    
        let image = images[parseInt(imgId) - 1];
        if (!image) {
            console.error(`Unable to find image with id ${imgId}`);
            return;
        }
    
        productImg.src = image.src;
    });

}



let maiImg = document.getElementById("img") as HTMLElement

maiImg!.addEventListener("click", (e) => {
    let target = e.target as HTMLElement

    let overlay = document.createElement("div");
    
    overlay.className = 'popup-overlay'

    document.body.appendChild(overlay)

    overlay.innerHTML = `

        <div class="popup-box">
            
            <button class="close">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fill-rule="evenodd"/></svg>
            </button>

            <img class="img"  src=${target.src} alt="">

            <button class="left icon">
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>            </button>
            </button>
            <button class="right icon">
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg> 
            </button>
        </div>

        <div class="pop-up-product-thumb">
            <ul class="pop-up-thumbnails">
                <li><img data-id="1" src="/images_e.product/image-product-1-thumbnail.jpg" alt=""></li>
                <li><img data-id="2" src="/images_e.product/image-product-2-thumbnail.jpg" alt=""></li>
                <li><img data-id="3" src="/images_e.product/image-product-3-thumbnail.jpg" alt=""></li>
                <li><img data-id="4" src="/images_e.product/image-product-4-thumbnail.jpg" alt=""></li>
            </ul>
        </div>`
        // let removeBtn = document.querySelector(".pop-up-container .remove")

        let popupLeftBtn = overlay.querySelector(".left");
        let popupRightBtn = overlay.querySelector(".right"); 
        let popupProductImg = overlay.querySelector(".img") as HTMLImageElement;
        let popUpThumContainer = overlay.querySelector(".pop-up-thumbnails")
        popUpThumContainer?.addEventListener("click", (e) => {
            let target = e.target as HTMLElement
            let imgId =  target.dataset.id;
            if (!imgId) {
                console.error("Unable to retrieve image id from dataset");
                return;
            }
            let {src} = images[parseInt(imgId) - 1];
            popupProductImg.src = `${src}`;
        })

        
    popupRightBtn?.addEventListener("click", () =>{
        let {src} = getImageSource()
        popupProductImg.src = `${src}`
        i++
        
    })


    popupLeftBtn?.addEventListener("click", () =>{
        let {src} = getImageSource()
        popupProductImg.src = `${src}`
        i--
        
    })

        let closePopUpBtn = overlay.querySelector(".close")
        console.log(closePopUpBtn)
    closePopUpBtn?.addEventListener("click",() => {
        overlay.classList.add("hide")
    })



})


