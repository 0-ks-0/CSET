let anchors;


function setup()
{
    setNavbar()
    setSectionId()
}
function setNavbar()
{
    anchors = document.querySelectorAll("#navbarLinks a")
    
    for(const a of anchors)
        a.href = "#" + a.innerHTML.toLowerCase()
    
}
function setSectionId()
{
    const sections = document.querySelectorAll("article")
   
    for(let i = 0; i < sections.length; i++)
        sections[i].id = anchors[i].innerHTML.toLowerCase()
    
}
function submitForm(){
    const form = document.getElementsByTagName("form")[0]
    alert("Thank you for your interest")
    form.reset()
}
