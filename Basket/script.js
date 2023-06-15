$(document).ready(function(){
    $(".item").on("dragstart", function(ev){
        ev.originalEvent.dataTransfer.setData("text", $(this).attr("id"));
        $("#move").fadeIn(200);
    }).on("dragend", function(ev){
        $("#move").fadeOut(200);
    });
    var defaultColor = $("#basket").css("background-color");
    $("#basket").on("dragover", function(ev){
        ev.preventDefault();
        $(this).css("background-color", "rgb(147, 176, 204)");
    }).on("dragleave", function(ev){
        $(this).css("background-color", defaultColor);
    }).on("drop", function(ev){
        ev.preventDefault();
        $(this).css("background-color", defaultColor);
        
        var itemId = ev.originalEvent.dataTransfer.getData("text");
        var name = $("#" + itemId + ".name").text();
        var price = $("#" + itemId + ".price").text();
        
        var li = "<li class='itemInBasket'><b>" + name + "<b><span>" + price + " zł</li>";
        $("#basket").append(li);
    });
});