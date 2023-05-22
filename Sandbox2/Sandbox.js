var countdown;

function timer(result, i){
    result.innerHTML = i;
    
    var countdown = setInterval(function(){
        i--;
        result.innerHTML = i;

        if(i <= 0){
            clearInterval(countdown);
        };
    }, 1000);
    return countdown;
};

window.onload = function (){
    var valueInput = document.getElementById("valueInput");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var result = document.getElementById("result");

    start.onclick = function(){
        var wartosc = parseFloat(valueInput.value);

        if(countdown){
            clearInterval(countdown);
        }

        if(!isNaN(wartosc)){
            countdown = timer(result, wartosc);
        }else{
            result.innerHTML = "Wprowadź poprawną liczbę";
        }
    };
    stop.onclick = function(){
        clearInterval(countdown);
        result.innerHTML = "0";
    };

    var mainImage = document.getElementById("main");
    var image = new Image();

    mainImage.appendChild(image);
    var mins = document.getElementsByClassName("pic");
    var currentMin = mins[0];
    
    image.src = currentMin.getAttribute("src");

    
    for(var i = 0; i < mins.length; i++){
        mins[i].onmouseover = function(){
            /*if(currentMin === mins[0]){
                currentMin.className += "current";
            }else{
                currentMin.className -= "current";
            };*/
            image.src = this.getAttribute("src");
        };
    };
};