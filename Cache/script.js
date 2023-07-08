$(document).ready(function(){
    var canvas = $("#canv")[0];
    ctx = canvas.getContext("2d");

    $("#canv").on("mousemove", function(event){
        var x = countOffsetX(event, $(this));
        var y = countOffsetY(event, $(this));

        $("#info").html("(" +x+ ", " +y+ ")");
    });


    var i = 0;
    $("#canv").on("click", function(event){
        var x = countOffsetX(event, $(this));
        var y = countOffsetY(event, $(this));

        if(++i %2){
            ctx.moveTo(x, y);
        }else{
            ctx.lineTo(x, y);
            ctx.strokeStyle=("white");
            ctx.stroke();
        }
    });
    function countOffsetX(event, object){
        return event.pageX - object.offset().left;
    }
    function countOffsetY(event, object){
        return event.pageY - object.offset().top;
    }

    $("header > span").on("click", function(){
        $("#hide").slideToggle();
        
        var buttonText = $("header > span").text();
        if (buttonText === "hide") {
            $("header > span").text("more");
        } else {
            $("header > span").text("hide");
        }

    })


})
