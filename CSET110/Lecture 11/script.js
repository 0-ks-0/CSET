//11/6/23
let buttons_add;
let index;
let itemTitles, itemImages, itemPrices;
let cartItemsDiv;
let cartPrices, total;


function setup(){
    buttons_add = document.getElementsByClassName("shop-item-button")
    for(const btn of buttons_add)
        btn.setAttribute("onclick", "addToCart(this)")

    itemTitles = document.getElementsByClassName("shop-item-title")
    itemImages = document.getElementsByClassName("shop-item-image")
    itemPrices = document.getElementsByClassName("shop-item-price")
    cartItemsDiv = document.getElementsByClassName("cart-items")[0]
    

    const purchaseButton = document.getElementsByClassName("btn-purchase")[0]
    purchaseButton.setAttribute("onclick", "clearCart()")
    

    const quantityInput = document.getElementsByClassName("cart-quantity-input")
    for(const input of quantityInput){
        input.setAttribute("onchange", "setValue(this)")
        input.setAttribute("min", "1")
    }
       
    
    const removeBtn = document.getElementsByClassName("btn-danger")
    for(const btn of removeBtn)
        btn.setAttribute("onclick", "removeItem(this)")
}   
function setValue(element){
    if(element.value < 1) element.value = 1
    updateTotal()

}

function addToCart(button){
    //finds index of "add to cart" button clicked
    for(let i = 0; i < buttons_add.length; i++){
        if(buttons_add[i] == button){
            index = i;
            break;
        }       
    }

    if(isDuplicate()) return
   

    const cartRow = document.createElement("div")
    cartRow.classList.add("cart-row")

    //item column
    const itemSectionDiv = document.createElement("div")
    itemSectionDiv.classList.add("cart-item", "cart-column")

    const itemImg = document.createElement("img")
    itemImg.classList.add("cart-item-image")
    itemImg.src = itemImages[index].src
    itemImg.width = "100"
    itemImg.height = "100"

    const itemName = document.createElement("span")
    itemName.classList.add("cart-item-title")
    itemName.innerHTML = itemTitles[index].innerHTML

    itemSectionDiv.appendChild(itemImg)
    itemSectionDiv.appendChild(itemName)
    cartRow.appendChild(itemSectionDiv)


    //price column
    const price = document.createElement('span')
    price.classList.add("cart-price", "cart-column")

    price.innerHTML = itemPrices[index].innerHTML
    
    cartRow.appendChild(price)


    //quantity column
    const quantitySectionDiv = document.createElement('div')
    quantitySectionDiv.classList.add("cart-quantity", "cart-column")

    const input = document.createElement('input')
    input.classList.add("cart-quantity-input")
    input.type = "number"
    input.value = "1"
    input.setAttribute("min", "1")
    input.setAttribute("onchange", "setValue(this)")


    const removeBtn = document.createElement("button")
    removeBtn.classList.add("btn", "btn-danger")

    removeBtn.type = "button"
    removeBtn.innerHTML = "REMOVE"
    removeBtn.setAttribute("onclick", "removeItem(this)")

    quantitySectionDiv.appendChild(input)
    quantitySectionDiv.appendChild(removeBtn)
    cartRow.appendChild(quantitySectionDiv)



    cartItemsDiv.appendChild(cartRow)

    updateTotal()

}


function removeItem(btn){
    btn.parentNode.parentNode.remove()
    updateTotal()
}


function clearCart(){
    while(cartItemsDiv.hasChildNodes()){
        cartItemsDiv.firstChild.remove()
    }
    updateTotal()
}


function updateTotal(){
    total = 0;
    cartPrices = document.getElementsByClassName("cart-price")

    const cartInputs = document.getElementsByClassName("cart-quantity-input")
  
    for(let i = 1; i < cartPrices.length; i++){
        let unitPrice = parseFloat(cartPrices[i].innerHTML.substring(1))
        let quantity = parseFloat(cartInputs[i-1].value)
        total += unitPrice * quantity;
    }
    //total =  Math.round((total + Number.EPSILON) * 100) / 100

    total = total.toFixed(2);
    totalPrice = document.getElementsByClassName("cart-total-price")[0]
    totalPrice.innerHTML = "$" + total

}


function isDuplicate(){
    const cartItemsName = document.getElementsByClassName("cart-item-title")
    const cartInputs = document.getElementsByClassName("cart-quantity-input")
    let tempIndex;

    for(let i = 0 ; i < cartItemsName.length; i++){
        if(itemTitles[index].innerHTML == cartItemsName[i].innerHTML)
            tempIndex = i;
    }
    if(tempIndex != null){
        let numOfItem = parseInt(cartInputs[tempIndex].value);
        cartInputs[tempIndex].value = `${numOfItem+=1}` 
        updateTotal()
        return true;   
    }
}