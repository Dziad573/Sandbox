    function dragstart(event){
        event.dataTransfer.setData("id", event.target.id);
    };
    function dragover(event){
        event.preventDefault();
    };
    function drop(event){
        event.preventDefault();
        event.target.appendChild(document.getElementById("imgdrop"));
    };

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
        "backgroundColor": "pink",
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

            $('#result').text('Wylosowana liczba: ' + wylosowana); 
            e.preventDefault();
            }
    )
    
});

