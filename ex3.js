let NameIns = document.getElementById("nameIns")
let contentIns = document.getElementById("contentIns")
let buttonClick = document.getElementById("todoClick")
let divManip = document.getElementById("div2")
let deletButton=document.getElementById("deletButton")



buttonClick.addEventListener("click",()=>{
    let paragText = NameIns.value + " : " + contentIns.value;
    let paragElem = `<p id = "id1">${paragText}<button id = "deletButton">🗑️</button></p>`;
    let id1 = document.getElementById("id1")
    divManip.innerHTML += paragElem;
})
divManip.addEventListener("click",(e)=>{
    if(e.target.innerText==="🗑️"){
        e.target.parentElement.remove();
    }

})
