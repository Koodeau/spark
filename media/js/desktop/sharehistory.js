var initShareHistory = function(values) {
    var canvas = document.getElementById('history'),
        c = canvas.getContext('2d'),
        h = 86,
        w = 310,
        x = 0,
        nbValues = values.length,
        m;

    canvas.height = h;
    canvas.width = w; 

    arrayMax = function( array ){
        return Math.max.apply( Math, array );
    };

    var maxValue = arrayMax(values);
    if (maxValue > 0) {
        m = (h - 10) / maxValue;
    } else {
        m = 0;
    }

    c.beginPath();
    c.moveTo(x, (h - values[0] * m));

    for(i = 0; i < nbValues; i += 1) {
        var y = (h - values[i] * m);

        x = i * (w / (nbValues - 1));
        
        c.lineTo(x, y);
    }

    c.lineTo(w, h);
    c.lineTo(0, h);
    c.lineTo(0, values[0]);
    c.fillStyle = "#ffd40d";
    c.fill();   
};