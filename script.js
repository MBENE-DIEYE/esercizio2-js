class Automobile{
    marca = "";
    modello = "";
    anno = 0

    constructor(marca,modello,anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

  static restruczione(automobile){
        let auto = new Automobile (automobile.marca,automobile.modello,automobile.anno)

        return auto
    }
}

let auto1 = new Automobile("audi","renault",13);
let auto2 = Automobile.restruczione(auto1);
console.log(auto2)