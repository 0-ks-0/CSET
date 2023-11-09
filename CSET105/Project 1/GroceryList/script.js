let input, item
let list_all, unpurchased, purchased ;
let listOfItems = [], tempList = []

function setup()
{
    input = document.getElementById("input")
    list_all = document.getElementById("list_all")
    unpurchased = document.getElementById("unpurchased")
    purchased = document.getElementById("purchased")

    //adding items onto list
    input.onkeyup = function (event)
    {
        if(event.keyCode == 13)
        {
            item = input.value;
            console.log(item)
            addToList(item)
            input.value = null
        }  
    }    
}
function addToList(item){
    let label = document.createElement("label");   
    let tempLabel = document.createElement("label");    

    label.innerHTML = item
    tempLabel.innerHTML = item

    //adding/removing strike-trough on items
    label.onclick = function()
    {
        //unpurchased 
        if(label.classList.contains("crossed_out")){ 
            label.classList.remove("crossed_out")
            addToUnpurchased(label)
        }
        //purchased
        else {
            label.classList.add("crossed_out")
            addToPurchased(label)
        }
    }

    listOfItems.push(label)
    tempList.push(tempLabel)
    list_all.appendChild(label)
    unpurchased.appendChild(tempLabel)
}
function addToUnpurchased(label){
    for(const item of tempList)
    if(item.innerHTML == label.innerHTML){
        unpurchased.appendChild(item)
        break
    }
}
function addToPurchased(label){
    for(const item of tempList)
        if(item.innerHTML == label.innerHTML){
            purchased.appendChild(item)
            break
        }   
}

