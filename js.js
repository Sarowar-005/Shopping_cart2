//iPhone Plus btn event handler
var iPhonePlus = document.getElementById("iPhonePlus");
iPhonePlus.addEventListener("click", function(){

    var value = 1;
    var price = 1219;
    getValue("iPhoneValue", value);
    getPrice("iPhonePrice", price);
    getPrice("subTotal", price);
    getPrice("total",price);

});

//iPhone minus btn event handler
var iPhoneMinus = document.getElementById("iPhoneMinus");
iPhoneMinus.addEventListener("click", function(){

    var input = document.getElementById("iPhoneValue").value;
    var value = -1;
    var price = -1219;
    if (input> 1) {
        getValue("iPhoneValue", value)
        getPrice("iPhonePrice", price);
        getPrice("subTotal", price);
        getPrice("total",price);
    }
});







//iPhone case plus btn event handler
var casePlus = document.getElementById("casePlus");
casePlus.addEventListener("click", function(){
    var value = 1;
    var price = 59;
    getValue("caseValue", value);
    getPrice("casePrice", price);
    getPrice("subTotal", price);
    getPrice("total",price);
});

//case Minus btn event handler
var caseMinus = document.getElementById("caseMinus");
caseMinus.addEventListener("click", function(){
    var input = document.getElementById("caseValue").value;
    var value = -1;
    var price = -59;
    if (input > 1) {
        getValue("caseValue", value);
        getPrice("casePrice", price);
        getPrice("subTotal", price);
        getPrice("total",price);
    }
});







//Samsung plus btn event handler
var smngPlus = document.getElementById("smngPlus");
smngPlus.addEventListener("click", function(){
    var value = 1;
    var price = 1090;
    getValue("smngValue", value);
    getPrice("smngPrice", price);
    getPrice("subTotal", price);
    getPrice("total",price);
});

//Samsung minus btn event handler
var smngMinus = document.getElementById("smngMinus");
smngMinus.addEventListener("click", function(){
    var input = document.getElementById("smngValue").value;
    var value = -1;
    var price = -1090;
    if (input>1) {
        getValue("smngValue", value);
        getPrice("smngPrice", price);
        getPrice("subTotal", price);
        getPrice("total",price);
    }
})

























//Iphone delete button event handler
var iPhoneDelete = document.getElementById("iPhoneDelete");
iPhoneDelete.addEventListener("click", function(){
     
    var price = parseFloat(document.getElementById("iPhonePrice").innerText);

    deletePrice("subTotal", price);
    deletePrice("total", price);
    displayNone("iPhone11");
})


//case delete button event handler
var caseDelete = document.getElementById("caseDelete");
caseDelete.addEventListener("click", function(){
    var price = parseFloat(document.getElementById("casePrice").innerText);

    deletePrice("subTotal", price);
    deletePrice("total", price);
    displayNone("iPhoneCase");
})

//samsung delete button event handler
var smngDelete = document.getElementById("smngDelete");
smngDelete.addEventListener("click", function(){
    var price = parseFloat(document.getElementById("smngPrice").innerText);
    deletePrice("subTotal", price);
    deletePrice("total", price);
    displayNone("samsungS2");
})



function deletePrice(id,price){
    var subTotal = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = subTotal - price;
}
function displayNone(id){
    var iPhone11 = document.getElementById(id);
    iPhone11.style.display = "none";
}
function getValue(id,value){
    var iPhoneNumber = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = iPhoneNumber + value;
}
function getPrice(id,price){
    var total = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = total = total + price;
}


var checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click", function(){
    alert("Are you sure to checkout this?")
})

