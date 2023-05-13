function zmien(){
    this.style.color = "red";
};

function odmien(){
    this.removeAttribute("style");
};

window.onload = function(){

    var test = document.getElementById("bagno");
    
    test.onmouseover = zmien;
    test.onmouseout = odmien;

}
