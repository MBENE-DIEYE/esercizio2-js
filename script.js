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