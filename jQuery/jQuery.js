$(document).ready(function() {
    $("div#a").css("color", "blue");
    $("div#b").css("color", "red");
    $("#c").css("color", "purple");
    $("#d").css("color", "green");
    $("#e").css("color", "yellow");

    $(".box>i").mouseover(
        function(){
            $(this).css("border-bottom", "2px solid red");
        });
        
    $(".box>i").mouseout(
        function(){
            $(this).css("border-bottom", "none");
    });
    
    $("div:contains(ad)").css("border", "none");
    $("#test div:nth-child(5)").css({
        "border": "5px solid blue", 
        "width": "200px",
        "backgroundColor": "pink"
    });
    
    $("#wynik").text("Zaznaczone: 0");
    $("#wynik").css({
        "border": "2px solid blue",
        "padding": "25px 15px 0 15px"
    });
    $("#formularz :checkbox").click(
        function(){
            var ilosc = $("#formularz :checked").length;
            if(ilosc == 0){
                $("#wynik").text("Zaznaczone: 0");
            }else{
                $("#wynik").text("Zaznaczone: " + ilosc);
            }
        }
    )
});

