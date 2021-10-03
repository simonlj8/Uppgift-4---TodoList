let count = 0;


let myTodoArray = [];
let index = 0;


const button = document.querySelector("#button");
const input = document.querySelector("#input");
const list = document.querySelector("ul");
const info = document.querySelector("small");
const counter = document.querySelector("p");



button.addEventListener("click", function () {



    const text = input.value;

    if (text.length == 0) {
        document.querySelector("small").innerHTML = "Värdet får inte vara tomt";
        return;
    }
    else {
        document.querySelector("small").innerHTML = "";
    }
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);
   

    const thrascan = document.createElement("span");
    thrascan.innerHTML = "&#X1F5D1";
    thrascan.setAttribute("class", "thrascan");
    item.appendChild(thrascan);

   
    itemLabel.addEventListener("click", function(){
        if(item.getAttribute("class") == "completed"){
            item.setAttribute("class", "");
            count--;
    }
    else{
        item.setAttribute("class", "completed");
        count++;
    }






    counter.innerText = `${count} count`;
    });

    thrascan.addEventListener("click", function(){

        item.remove();

    });

   
   let myObj = {
    "Todo": text,  
    "index": index 
};

    myTodoArray.push(myObj);
  
    index++;



    input.value = "";
});