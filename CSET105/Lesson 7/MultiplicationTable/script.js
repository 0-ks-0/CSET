
/*
* It is extremely important to operate on the array backwards,
from the end to the start. Can you guess why?

* length of the array changes when the img element is replaced/removed from the array

* solution: i-- after replacing, or loop array backwards
*/


let numOfRows;
let rowArr = []
let inputValue;

function setup(){
    const input = document.getElementById("input");

    input.onkeyup = (event) =>{
        event.preventDefault()
        const enterKey = 13;
        inputValue = parseFloat(input.value)

        if(event.keyCode == enterKey ){
            if(inputValue <= Number.MIN_SAFE_INTEGER && inputValue >= Number.MAX_SAFE_INTEGER){
                input.value = null
                return
            }  
            else{
                setNumOfRows();
                createTable()
                input.value = null
            }  
        } 
    } 
}

function setNumOfRows(){
    if(inputValue <= 12) numOfRows = 12 //have at least 12 rows
    else numOfRows = inputValue;
}

function clearTable(){
    let temp = document.querySelector("table")
    console.log(temp)
    //remove table if there is one
    if(temp != null)
        temp.remove()
}

function createTable(){
    clearTable()
    //return if blank inputValue
    if(!inputValue) return

    const table = document.createElement("table")

    //create header elements
    const tableHeaderRow = document.createElement("tr")
    const headerMultiplicand = document.createElement('th')
    const headerMutliplier  = document.createElement('th')
    const product  = document.createElement('th')

    //set headers text
    headerMultiplicand.innerHTML = "Multiplicand"
    headerMutliplier.innerHTML = "Multiplier"
    product.innerHTML = "Product"

    //adding headers and headerRow to table
    tableHeaderRow.appendChild(headerMultiplicand)
    tableHeaderRow.appendChild(headerMutliplier)
    tableHeaderRow.appendChild(product)
    table.appendChild(tableHeaderRow)

    let tableRows = [];


    for(let i = 0; i < numOfRows; i++){
        //create tr and td
        let tr = document.createElement('tr')
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        
        //add values to td in the row
        td1.innerHTML = inputValue;
        td2.innerHTML = i+1
        td3.innerHTML = inputValue * (i+1);

        //add td to row
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        //store all the rows in an array
        tableRows.push(tr)
    }
        
    //add table to body
    document.body.appendChild(table);

    //add tr to table
    for(const row of tableRows)
        table.appendChild(row)
}