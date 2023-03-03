function addnewWex() {
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("workexfield");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb); 
   
}

function addAcadQual() {
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("acdquafield");
    let weAddButtonOb2=document.getElementById("weAddButton2");
    aqOb.insertBefore(newNode,weAddButtonOb2);
    
}

// genrating cv
