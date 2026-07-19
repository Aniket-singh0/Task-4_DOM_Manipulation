// Change Heading Text

function changeText(){

    let heading = document.getElementById("heading");

    heading.innerHTML = "DOM Updated Successfully 🚀";

}



// Change CSS using DOM

function changeColor(){

    let para = document.getElementById("para");

    para.style.color = "blue";

    para.style.fontSize = "25px";

}



// Add New Element

function addElement(){

    let div = document.getElementById("container");


    let newPara = document.createElement("p");


    newPara.innerHTML = 
    "New Element Added Dynamically";


    div.appendChild(newPara);

}



// Remove Element

function removeElement(){

    let div = document.getElementById("container");


    if(div.lastElementChild){

        div.removeChild(div.lastElementChild);

    }

}