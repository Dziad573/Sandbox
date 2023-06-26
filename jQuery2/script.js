$(document).ready(function(){

    function init(){
        $("form input.stored").each(function(){
            var form = $(this).parent();
            var idOfForm = form.attr("id");
            var type = $(this).data("type");

            if(localStorage.getItem("#" + idOfForm + "input[data-type='"+type+"']"))
                $(this).val(localStorage.getItem("#" + idOfForm + "input[data-type='"+type+"']"));
        });
    }

    init();

    $("input.stored").on("keyup",function(){
        var form = $(this).parent();
        var idOfForm = form.attr("id");
        var type = $(this).data("type");

        localStorage.setItem("#" + idOfForm + "input[data-type='"+type+"']", $(this).val());
    });

    $("form input[type='submit']").on("click", function(evt){

        evt.preventDefault();

        $("input.stored", evt.target.parentNode).each(function(){
            var form = $(this).parent();
            var idOfForm = form.attr("id");
            var type = $(this).data("type");
            localStorage.removeItem("#" + idOfForm + "input[data-type='"+type+"']");
            $("#" + idOfForm + "input[data-type='"+type+"']").val('');
        });

        var name = $("input[data-type='name']").val();
        var eMail = $("input[data-type='E-mail']").val();
        var tel = $("input[data-type='tel']").val();
    
        if(name === "" || eMail === "" || tel === ""){
            alert("Uzupełnij formularz!");
        } else if(tel.length === 9) {
            alert("Dane zostały przesłane!");
            $("input[data-type='name']").val('');
            $("input[data-type='E-mail']").val('');
            $("input[data-type='tel']").val('');
        } else {
            alert("Nieprawidłowy numer telefonu!");
        }
    });
    
    
});