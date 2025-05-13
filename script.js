class Automobile{
    marca = "";
    modello = "";
    anno = 0
    // aggiungi propietà
    chilometraggio =""

    constructor(marca,modello,anno,chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio
    }

  static restruczione(automobile){
        let auto = new Automobile (automobile.marca,automobile.modello,automobile.anno )

        return auto
    }
    // aggiungi methodi
static aggiungichilometraggio(km){
    let chilomet = new Automobile(km.marca,km.modello,km.anno,km.chilometraggio)

    return chilomet 
}

static mostrachilometraggio (){
    return aggiungichilometraggio(km)
}

}

let auto1 = new Automobile("audi","renault",13,40+"km");
let auto2 = Automobile.restruczione(auto1);
let auto3 = Automobile.aggiungichilometraggio(auto1)
 
console.log(auto3)

// sotto classe Electrica

class Eletrica extends Automobile{
    autonomia =0

    constructor(marca,modello,anno,chilometraggio,autonomia){
        super(marca,modello,anno,chilometraggio)
        this.autonomia = autonomia
    }
   static restruczione(automobile){
        let auto = new Eletrica (automobile.marca,automobile.modello,automobile.anno,automobile.chilometraggio,automobile.autonomia )

        return auto
    }

    ricarica(km){
        return km +1
    }
}

let auto4 = new Eletrica ("audi","renault",25,70+"km",100);
let auto5 = Eletrica.restruczione(auto4);
console.log(auto5)