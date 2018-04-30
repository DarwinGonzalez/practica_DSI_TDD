var assert = require('assert');

function Raices(a, b, c) {
    
    var Discriminante = b * b - 4 * a * c;
    var RaizDiscriminante = Math.sqrt(Discriminante);
    
    if(Discriminante > 0 ) {
        var RaizReal1 = (-b + RaizDiscriminante) / (2 * a);
        var RaizReal2 = (-b - RaizDiscriminante) / (2 * a);
        var RaizImaginaria1 = 0;
        var RaizImaginaria2 = 0;
    }
    else {
        var RaizReal1 = 0;
        var RaizReal2 = 0;
        var RaizImaginaria1 = (-b + RaizDiscriminante) / (2 * a);
        var RaizImaginaria2 = (-b - RaizDiscriminante) / (2 * a);
    }
   
    return [ [RaizReal1,RaizImaginaria1], [RaizReal2,RaizImaginaria2] ];
}

assert.deepEqual(Raices(1,-5,0), [[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0), [[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0), [[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1), [[0,2],[0,-2]]);
