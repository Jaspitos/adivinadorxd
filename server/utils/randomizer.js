/**
 * Created by Zaros on 01/07/2017.
 */
function randomizer(max, size){
    var res = [],
        choose = [];
    for(var j = 1; j < max; j++){
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

module.exports = {
    randomizer : randomizer
}


