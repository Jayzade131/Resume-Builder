function addnewWex() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("workexfield");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);

}

function addAcadQual() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("acdquafield");
    let weAddButtonOb2 = document.getElementById("weAddButton2");
    aqOb.insertBefore(newNode, weAddButtonOb2);

}

// genrating cv
function genrateCv() {
    //name
    let nameField = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    //contract
    document.getElementById("contractT").innerHTML = document.getElementById("contractfield").value;

    //gmail
    document.getElementById("gmailT").innerHTML = document.getElementById("gmailfield").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    //insta
    document.getElementById("instaT").innerHTML = document.getElementById("Instafield").value;

    //github
    document.getElementById("githubT").innerHTML = document.getElementById("githubfield").value;

    //linkedin
    document.getElementById("LinkedinT").innerHTML = document.getElementById("linkedinfield").value;

    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;

    //skills
    document.getElementById("skillsT").innerHTML = document.getElementById("skillsfield").value;

    //Work experience

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("WeT").innerHTML = str;

    //academic qualification

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let a of aqs) {
        str1 = str1 + `<li>${a.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    //profile 
    let file=document.getElementById("profilefield").files[0];
    console.log(file);
    let reader =new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("profileT").src=reader.result;
    }
    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

function printcv(){
window.print();
}