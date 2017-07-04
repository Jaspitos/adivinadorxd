/**
 * Created by Zaros on 02/07/2017.
 */
$(document).ready(function(){
    $('.carousel').carousel();

    /*Login form*/

   /*$('#main').ajaxForm({

        beforeSubmit: function(formData, jqForm, options) {
            return true;
        },

        success: function(responseText, status, xhr, $form) {
            if (status == 'success')
            {
                //window.location.href = '/middle';
            }
        },

        error: function(e) {

            console.log(e.responseText);

            if(e.responseText === "noDif")

                alert("Elige una dificultad antes de continuar");

        }

    });*/


});

