var assert = require('assert');

function Raices(a, b, c) {
    
    var Discriminante = b * b - 4 * a * c;
    var RaizDiscriminante;
    var RaizReal1, RaizReal2, RaizImaginaria1, RaizImaginaria2;
    var DobleA = 2 * a;
    
    if(Discriminante > 0 ) {
        RaizDiscriminante = Math.sqrt(Discriminante);
        var RaizReal1 = (-b + RaizDiscriminante) / DobleA;
        var RaizReal2 = (-b - RaizDiscriminante) / DobleA;
        var RaizImaginaria1 = 0;
        var RaizImaginaria2 = 0;
    }
    else {
        RaizDiscriminante = Math.sqrt(-Discriminante);
        var RaizReal1 = -b / DobleA;
        var RaizReal2 = -b / DobleA;
        var RaizImaginaria1 = RaizDiscriminante / DobleA;
        var RaizImaginaria2 = -RaizDiscriminante / DobleA;
    }
   
    return [ [RaizReal1,RaizImaginaria1], [RaizReal2,RaizImaginaria2] ];
}

assert.deepEqual(Raices(1,-5,0), [[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0), [[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0), [[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1), [[0,1],[0,-1]]);