class Automobile{
    marca = "";
    modello = "";
    anno = 0
    chilometraggio =0
    età = 0
     
    constructor(marca,modello,anno,chilometraggio,età){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio
        this.età = età
    }

    restruczione(automobile){
        let auto = new Automobile (automobile.marca,automobile.modello,automobile.anno )

        return auto
    }
    //---------------------------------------------------------------- aggiungi methodi------------------------------------



 aggiungichilometraggio(km){

  this.chilometraggio =( this.chilometraggio) + km 
}

 mostrachilometraggio (){
    return` ${this.chilometraggio}km`
}

// ----------------------------------------------------metodo privato------------------------------

 #calcolaEta(){
     this.età = 2025 - this.anno 

}



mostraEta(){
    return this.#calcolaEta()
}


// ---------------------------------------metodo protteto------------------------------

_controllaChilometri(){
    if (this.chilometraggio > 10.000){
        return"il chilometraggio ha superato 10.000km"
    }
}

}

let auto1 = new Automobile("audi","renault",2013);
let auto2 = Automobile.restruczione(auto1);
console.log(auto2)



// ----------------------------------------
let auto3 = new Automobile("fiat","panda")
auto3.aggiungichilometraggio(90)
console.log(auto3.mostrachilometraggio())
 
 
// console.log(auto3)




// -------------------------------------------------------------------------sotto classe Electrica----------------------------




class Eletrica extends Automobile{
    autonomia =0

    constructor(marca,modello,autonomia){
        super(marca,modello)
        this.autonomia = autonomia
    }
     restruczione(){
         
        return `${this.marca} ${this.modello},autonomia: ${
            this.autonomia
        } km`
    }

    ricarica(km){
         this.autonomia += km 
    }
}

let auto4 = new Eletrica ("audi","renault",100);
 console.log(auto4.restruczione());  

// // ---------------------------------------------------saluta()----------------------------

function Automobile(marca,modello) {
    this.marca = marca
    this.modello =modello
    
    
}

   Automobile.prototype.saluta = function(){
    return `Ciao! ${this.marca} ${this.modello}`;
   }
let auto5 = new Automobile("toyota","renault")
console.log(auto5.saluta())

