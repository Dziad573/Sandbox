$(document).ready(function(){
    var worker = new Worker("task.js");
    
    worker.onmessage = function(e){
        if(e.data == "end"){
            $("#start-counting").removeAttr("disabled");
        }else{
            $("#counter").html(e.data);
        }
    };

    $("#start-counting").on("click", function(){
        $(this).attr("disabled", "disabled");
        var countFrom = $("#count-from").val();
        worker.postMessage({
            'cmd': 'start',
            'count-from': countFrom
        });
    });
});
