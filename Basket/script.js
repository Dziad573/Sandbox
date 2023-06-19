$(document).ready(function(){

    //######### EVENT DRAG AND DROP #########

    $(".item").on("dragstart", function(ev){
        ev.originalEvent.dataTransfer.setData("text", $(this).attr("id"));
        $("#move").fadeIn(200);
        $(this).find("#info").slideUp(300);
        $(this).find("#info").css({ height: 0, opacity: 0 }).stop(true, true);
        $(this).find("#info").css({ height: "71%", opacity: 1 });
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
        $("#move").fadeOut(200);

        //######### CREATING ITEMS IN SHOPPING CART (NAME + PRICE) #########

        var itemId = ev.originalEvent.dataTransfer.getData("text");
        var name = $("#" + itemId + " .name").text();
        var price = $("#" + itemId + " .price").text();
        
        var li = "<li class='itemInBasket'><b>" + name + "</b><span>" + " " + price + " zł</span></li>";
        $("#inBasket").append(li);

        //######### TOTAL PRICE #########

        var total = 0;
        $("#inBasket .itemInBasket span").each(function(){
            total += parseFloat($(this).text());
        });
        var totalPrice = total.toFixed(2);
        $("#totalPrice").text(totalPrice);

        //######### MIN 1 ELEMENT TO SHOW SUMMARY #########
        var number = $("#inBasket .itemInBasket").length;
        if (number === 0) {
            $("#sum").fadeOut(200);
        } else {
            $("#sum").fadeIn(200);
        }
        $(this).find(".info").empty();
    });

    //######### EVENT THAT SHOWS INFO AFTER HOVER #########
    $(".item").on("mouseenter", function(slide){
        slide.preventDefault();
        $(this).find("#info").slideDown(300);
        $(this).find("#info").fadeIn(300);
    });

    $(".item").on("mouseleave", function(slide){
        slide.preventDefault();
        $(this).find("#info").slideUp(300);
    });
});