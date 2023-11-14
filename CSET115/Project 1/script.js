// Nov 14, 2023
function validateEmail(email){
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}


function create(){
    const password = document.getElementById("password")
    const password_confirm = document.getElementById("password_confirm")
    const email = document.getElementById('email')

    if(!validateEmail(email.value)){
        alert("this is not a valid email")
        return false;
    }

    if(password.value != password_confirm.value){
        alert("Passwords do not match")
        return false
    }
    alert("Your account has been created")

    window.location = "Login.html"
    return false
}


function login(){
    const user = document.getElementById('user')

    if(user.value.includes("@") && !validateEmail(user.value)){
        alert("this is not a valid email")
        return false;
    }
        
    alert('Success, you have logged in')
    return true;
}

function forgot(){
    const user = document.getElementById('user')

    if(user.value.includes("@") && !validateEmail(user.value)){
        alert("this is not a valid email")
        return false;
    }
        
    alert('An email has been sent for you to reset your password')
    return true;
}


