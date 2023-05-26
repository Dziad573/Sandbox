
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
    var a = 5;
    var b = 12;
    var c = 1.161;    
    console.log(Math.max(a, b, c));
    console.log(Math.floor(c));

    $("#losuj").click(
        function(){
            var min = parseInt($("#liczba1").val());
            var max = parseInt($("#liczba2").val());

            function losujLiczbe(min, max) {
                var zakres = max - min + 1;
                var wylosowanaLiczba = Math.floor(Math.random() * zakres) + min;
                return wylosowanaLiczba;
        }
            var wylosowana = losujLiczbe(min, max);
            console.log(wylosowana);

            $('#result').text('Wylosowana liczba: ' + wylosowana); 
            e.preventDefault();
            }
    )

});

