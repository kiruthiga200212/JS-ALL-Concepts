var popUp = document.querySelector(".popup")
var cancelBtn = document.getElementById("cancel")
cancelBtn.addEventListener("click", function(event){
    event.preventDefault();
    popUp.style.display = "none"
})

//adding quote
var addBtn = document.getElementById("add");
var container = document.querySelector(".main-container");


addBtn.addEventListener("click", function(event){
    event.preventDefault();
    var autherInput = document.getElementById("authertxt").value;
    var quoteInput = document.getElementById("quotetxt").value;
    popUp.style.display = "none";
    var newbox = document.createElement("div");
    newbox.classList.add("box")
    newbox.innerHTML = `
     
                <h1 id="authername">${autherInput}</h1>
                <h3 id="quote">${quoteInput} </h3>
                <button type ="submit" class ="deleteBtn">Delete</button>
                
            `
        newbox.querySelector(".deleteBtn").addEventListener("click", function(){
        newbox.remove();
    });

    // ✅ append new box to container
    container.appendChild(newbox);

    // clear inputs
    document.getElementById("authertxt").value = "";
    document.getElementById("quotetxt").value = "";
    

})

var addNewQuote = document.getElementById("adding")
addNewQuote.addEventListener("click",function(){
    popUp.style.display = "flex";

})