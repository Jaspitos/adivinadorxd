j/**
 * Created by Zaros on 03/07/2017.
 */
$(document).ready(function(){
    var i = 1;
    var respuestas = [];

    function recogerRespuesta(num) {
        if($("#hp1").hasClass("active")) {
            respuestas[num-1] = "1";
        }
        if($("#hp2").hasClass("active")) {
            respuestas[num-1] = "2";
        }
        if($("#hp3").hasClass("active")) {
            respuestas[num-1] = "3";
        }
        if($("#hp4").hasClass("active")) {
            respuestas[num-1] = "4";
        }
        if($("#hp5").hasClass("active")) {
            respuestas[num-1] = "5";
        }
        if($("#hp6").hasClass("active")) {
            respuestas[num-1] = "6";
        }
        if($("#hp7").hasClass("active")) {
            respuestas[num - 1] = "7";
        }

        if($("#sdla1").hasClass("active")) {
            respuestas[num-1] = "1";
        }
        if($("#sdla2").hasClass("active")) {
            respuestas[num-1] = "2";
        }
        if($("#sdla3").hasClass("active")) {
            respuestas[num-1] = "3";
        }

        $("#res").val(respuestas);
    }

    function comprobarAciertos(){
        var res = $("#res").val();
        var resc = $("#resC").text();
        var i = 0;

        for(var j = 0;j<res.length;j++) {
            if(res[j] === resc[j]) i++;
        }

        if(i <= 3) alert("Has acertado "+i+"/10\nEres un patán no?");
        else if(i > 3 && i <= 5) alert("Has acertado "+i+"/10\nCreo que lo puedes hacer mejor");
        else if(i > 5 && i <= 7) alert("Has acertado "+i+"/10\nNo está mal pero puedes mejorar");
        else if(i > 7 && i <= 9)alert("Has acertado "+i+"/10\nBien hecho");
        else alert("Has acertado "+i+"/10\nExcelente eres un pro");



    }

    $("#next").click(function(){
        recogerRespuesta(i);
        if(i == 9) {
            $("#next").text('Finalizar');
        } else if(i >= 10) {
            $("#pregunta"+i).remove();
            comprobarAciertos();
            window.location.href="/";
        }
            //$("#pregunta"+i).css("visibility", 'hidden');
            $("#pregunta"+i).remove();
            $("#pregunta"+(i+1)).css("visibility", 'visible');
            if(i < 10) {
                $('#nPregunta').text('Pregunta '+(i+1));
                i++;
            }


    });

});

