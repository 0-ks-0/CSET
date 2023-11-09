var color, buttons
let arr=[]
function setup(){
    buttons = document.querySelectorAll("button");
    setColors()
}

function setColors(){
    for(let i = 0; i < buttons.length; i++)
        arr[i] = new Array(3)
    
    for(let i = 0; i < buttons.length; i++){
        for(let j = 0; j < 3; j++)
            arr[i][j] = rng(0, 255);
        buttons[i].style.backgroundColor = `rgb(${arr[i][0]}, ${arr[i][1]}, ${arr[i][2]})`
    }
}

function changeColors(element){

    if(element.value == 'random'){
        for(const btn of buttons)
            btn.style.backgroundColor = `rgb(${rng(0, 255)}, ${rng(0, 255)}, ${rng(0, 255)})`
    }  
    else if(element.value == 'reset'){
        for(let i =0; i < buttons.length; i++)
            buttons[i].style.backgroundColor = `rgb(${arr[i][0]}, ${arr[i][1]}, ${arr[i][2]})`
    } 
    else{
        switch(element.value){
            case "red":
                color = "red";
                break;
            case "green":
                color = "green";
                break;
            case "blue":
                color = "blue";      
        }
        for(const btn of buttons)
            btn.style.backgroundColor = color;
    }
   

}
function rng(low, high){
    return Math.floor((high - low + 1) * Math.random() + low).toString()
}
