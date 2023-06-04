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

function zlicz(event){
    var tmp = document.getElementById("licznikX");  // POZYCJA KURSORA
    tmp.innerHTML = event.clientX;
    var tmp2 = document.getElementById("licznikY");  // POZYCJA KURSORA
    tmp2.innerHTML = event.clientY;
};

function okresl(eve, eveObj){
    var e = eve || window.eve;
    var srcElement = e.target || e.srcElement;
    var wynik = document.getElementById("wynik");
    wynik.innerHTML = "źródło eventu " + srcElement.tagName + "<br>event przypisany do tagu: " + eveObj.tagName;
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
    pozycja.onmousemove = zlicz;

    var test3 = document.getElementById("test3");
    var przycisk = document.getElementById("przycisk");
    var lorem = document.getElementById("lorem");

    test3.onmousemove = function(eve){
        okresl(eve, this);
    };
    przycisk.onclick = function(eve){
        alert("przycisk");
        okresl(eve, this);
    };
    lorem.onclick = function(eve){
        var e = eve || window.eve;
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e = true;
        alert("Lorem ipsum");
        eve.stopPropagation();
    };

    var img1 = document.querySelector("#img1");

    img1.onmousedown = function(){
        img1.onmousemove = function(ev){
            this.style.left = ev.clientX - this.width / 2 + "px";
            this.style.top = ev.clientY - this.height / 2 + "px";
        };
    };
    img1.onmouseup = function(){
        this.onmousemove = null;
    };
    img1.ondragstart = function(ev){
        ev.preventDefault();
    };

    var img2 = document.querySelector("#img2");

    img2.onmousedown = function(){
        img2.onmousemove = function(ev){
            this.style.left = ev.clientX - this.width / 2 + "px";
            this.style.top = ev.clientY - this.height / 2 + "px";
        };
    };
    img2.onmouseup = function(){
        this.onmousemove = null;
    };
    img2.ondragstart = function(ev){
        ev.preventDefault();
    }
};
