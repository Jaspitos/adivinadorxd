/**
 * Created by Zaros on 02/07/2017.
 */

var generador = require('../utils/generador');

function comprobarVacio(dif, callback) {
    if(dif == 0){
        callback(true, 'No has elegido dificultad :( Vuelve para atrás');
    }
    else {
        callback(false);
    }
}

function cargarNivel(req, res){
    comprobarVacio(req.body['difF'], function(o,e) {
        if(e || o === true) res.status(400).send(e);
        else if(o === false){
            var preguntas = generador.generarNivel(req.body['sagaF'], req.body['difF']);
            res.render('cuestionario', {
                title: "Cuestionario",
                preguntas: preguntas
            });

        }
    });

}

function comprobarAciertos(req, res){
    var ans = req.body['res'];
}

module.exports = {
    comprobarVacio: comprobarVacio,
    cargarNivel: cargarNivel
}
