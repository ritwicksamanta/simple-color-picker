/*jshint esversion: 8*/
$("document").ready(function(){
    $(document).bind("contextmenu", function (e) {
        return false;
    });
    $('span button').each(function(){
        $(this).on("click",function(){
            const object = this;
            //$(this).removeClass('btn');
            $('span button').each(function(){
                if(!($(this).is(object)))
                    $(this).css('background-color', '#000000');
                //console.log($(this).prop('class'));
            });
            if($(this).attr("name")=="red"){
                $("#textRed").val(255);
                $("#textGreen").val(0);
                $("#textBlue").val(0);
                $(this).css('background-color', 'red');
            }
            else if ($(this).attr("name")=="green") {
                $("#textRed").val(0);
                $("#textGreen").val(255);
                $("#textBlue").val(0);
                $(this).css('background-color', 'green');
            } else {
                $("#textRed").val(0);
                $("#textGreen").val(0);
                $("#textBlue").val(255);
                $(this).css('background-color', 'blue');
            }
        });
    });
    
    $('.container').mousemove(function (){
        const r = $("#textRed").val();
        const g = $("#textGreen").val();
        const b = $("#textBlue").val();
        const color = 'rgb('+r+','+g+','+b+')';
        console.log(color);
        $("#idColorBox").css('background-color',color);
        console.log($("#idColorBox").css('background-color'));
        $("#idColorBox").html("<code><h3>Color (RGB) : "+color+"</h3></code>");
    });

    
});