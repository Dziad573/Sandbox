$(document).ready(function(){
    $(".item").dragstart(function(ev){
        ev.dataTransfer.setData("text", $(this).attr("id"));
        $("#move").fadeIn();
    }).dragend(function(ev){
        $("move").fadeOut();
    });
});