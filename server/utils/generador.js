/**
 * Created by Zaros on 01/07/2017.
 */

var Pregunta = require('../models/question');
var Lista = require('../utils/lista.json');

function randomizer(max, size){
    var res = [],
        choose = [];
    for(var j = 0; j <= max; j++){
        choose.push(j);
    }

    function chooseRandomNumber() {
        return choose[Math.floor(Math.random() * choose.length)];
    }

    var rand;
    for (var i = 0; i < size; i++) {
        rand = chooseRandomNumber();
        res.push(rand);
        choose.splice(choose.indexOf(rand), 1);
    }

    return res;
}

function generarNivel(sagaG, difG){

    var random= [];
    var arr = [];
    var res = [];
    var track = [];

   if(difG == "1"){
       if(sagaG == "hp") {
           random = randomizer(61,10);
           for(var i=0; i< random.length;i++){
               res[i] = Lista.hp.f[random[i]].res;
               track[i] = Lista.hp.f[random[i]].url;
           }
       }
       if(sagaG == "sdla") {
           random = randomizer(53,10);
           for(var i=0; i< random.length;i++){
               res[i] = Lista.sdla.f[random[i]].res;
               track[i] = Lista.sdla.f[random[i]].url;
           }
       }
   }
    if(difG == "2"){
        if(sagaG == "hp") {
            random = randomizer(58,10);
            for(var i=0; i< random.length;i++){
                res[i] = Lista.hp.m[random[i]].res;
                track[i] = Lista.hp.m[random[i]].url;
            }
        }
        if(sagaG == "sdla") {
            random = randomizer(42,10);
            for(var i=0; i< random.length;i++){
                res[i] = Lista.sdla.m[random[i]].res;
                track[i] = Lista.sdla.m[random[i]].url;
            }
        }
    }
    if(difG == "3") {
        if(sagaG == "hp") {
            random = randomizer(57,10);
            for(var i=0; i< random.length;i++){
                res[i] = Lista.hp.d[random[i]].res;
                track[i] = Lista.hp.d[random[i]].url;
            }
        }
        if(sagaG == "sdla") {
            random = randomizer(35,10);
            for(var i=0; i< random.length;i++){
                res[i] = Lista.sdla.d[random[i]].res;
                track[i] = Lista.sdla.d[random[i]].url;
            }
        }
    }

    var ques1 = new Pregunta(track[0], res[0], sagaG);
    arr.push(ques1);

    var ques2 = new Pregunta(track[1], res[1]);
    arr.push(ques2);

    var ques3 = new Pregunta(track[2], res[2]);
    arr.push(ques3);

    var ques4 = new Pregunta(track[3], res[3]);
    arr.push(ques4);

    var ques5 = new Pregunta(track[4], res[4]);
    arr.push(ques5);

    var ques6 = new Pregunta(track[5], res[5]);
    arr.push(ques6);

    var ques7 = new Pregunta(track[6], res[6]);
    arr.push(ques7);

    var ques8 = new Pregunta(track[7], res[7]);
    arr.push(ques8);

    var ques9 = new Pregunta(track[8], res[8]);
    arr.push(ques9);

    var ques10 = new Pregunta(track[9], res[9]);
    arr.push(ques10);

    return arr;
}

module.exports = {
    generarNivel: generarNivel,
    randomizer: randomizer
}
