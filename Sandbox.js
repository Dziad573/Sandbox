function zmien(){
    this.style.color = "red";
};

function odmien(){
    this.removeAttribute("style");
};

function powiekszRamke(){
    this.style.border = "5px solid white";
};

function powiekszCzcionke (){
    var fontSize = parseInt(window.getComputedStyle(this).fontSize);
    this.style.fontSize = (5+fontSize) + "px";
};

function wykonaj(event){
    var tmp = document.getElementById("licznikX");  // POZYCJA KURSORA
    tmp.innerHTML = event.clientX;
    var tmp2 = document.getElementById("licznikY");  // POZYCJA KURSORA
    tmp2.innerHTML = event.clientY;
};

window.onload = function(){

    var test = document.getElementById("bagno");
    
    /*test.onmouseover = zmien;
    test.onmouseout = odmien;*/

    test.addEventListener("mouseover", zmien);
    test.addEventListener("mouseover", powiekszCzcionke);
    test.addEventListener("mouseover", powiekszRamke);
    test.addEventListener("mouseout", odmien);

    // #################################### //

    var pozycja = document;
    pozycja.onmousemove = wykonaj;


}
