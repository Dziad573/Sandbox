$(document).ready(function() {
    $("div#a").css("color", "blue");
    $("div#b").css("color", "red");
    $("#c").css("color", "purple");
    $("#d").css("color", "green");
    $("#e").css("color", "yellow");

    $(".box>i").mouseover(
        function(){
            $(this).css("border-bottom", "2px solid red");
        }
        )
        $(".box>i").mouseout(
            function(){
                $(this).css("border-bottom", "none");
        }
    )
});

