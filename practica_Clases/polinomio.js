class Polinomio {
    
    constructor(a, b, c) {
        this.a =  a;
        this.b = b;
        this.c = c;
    }
    
    get_a() {
        return this.a;
    }
    
    get_b() {
        return this.b;
    }
    
    get_c() {
        return this.c;
    }
    
    
    get_Raices(a,b,c) {
            
        var Discriminante = b * b - 4 * a * c;
        var RaizDiscriminante;
        var RaizReal1, RaizReal2, RaizImaginaria1, RaizImaginaria2;
        var DobleA = 2 * a;
    
        if(Discriminante > 0 ) {
            RaizDiscriminante = Math.sqrt(Discriminante);
            RaizReal1 = (-b + RaizDiscriminante) / DobleA;
            RaizReal2 = (-b - RaizDiscriminante) / DobleA;
            RaizImaginaria1 = 0;
            RaizImaginaria2 = 0;
        }
        
        else {
            RaizDiscriminante = Math.sqrt(-Discriminante);
            RaizReal1 = -b / DobleA;
            RaizReal2 = -b / DobleA;
            RaizImaginaria1 = RaizDiscriminante / DobleA;
            RaizImaginaria2 = -RaizDiscriminante / DobleA;
        }
   
        return [ [RaizReal1,RaizImaginaria1], [RaizReal2,RaizImaginaria2] ];
    };
    
    get_Raices() {
            
        var Discriminante = this.get_b() * this.get_b() - 4 * this.get_a() * this.get_c();
        var RaizDiscriminante;
        var RaizReal1, RaizReal2, RaizImaginaria1, RaizImaginaria2;
        var DobleA = 2 * this.get_a();
    
        if(Discriminante > 0 ) {
            RaizDiscriminante = Math.sqrt(Discriminante);
            RaizReal1 = (-this.get_b() + RaizDiscriminante) / DobleA;
            RaizReal2 = (-this.get_b() - RaizDiscriminante) / DobleA;
            RaizImaginaria1 = 0;
            RaizImaginaria2 = 0;
        }
        
        else {
            RaizDiscriminante = Math.sqrt(-Discriminante);
            RaizReal1 = -this.get_b() / DobleA;
            RaizReal2 = -this.get_b() / DobleA;
            RaizImaginaria1 = RaizDiscriminante / DobleA;
            RaizImaginaria2 = -RaizDiscriminante / DobleA;
        }
   
        return [ [RaizReal1,RaizImaginaria1], [RaizReal2,RaizImaginaria2] ];
    };
    
};

var poli = new Polinomio(1,1,1);
console.log(poli.get_Raices());