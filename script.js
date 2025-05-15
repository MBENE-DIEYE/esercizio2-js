class Automobile{
    marca = "";
    modello = "";
    anno = 0
    chilometraggio =0
    età = 0
    #aggiungiChilometriChiamato =0

    // ------------------------------------------------contatore------------------
    #contatorechiamato=0
     
    constructor(marca,modello,anno,chilometraggio,età){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio
        this.età = età
        this.#contatorechiamato = this.#contatorechiamato
    }

    descrizione(){
        return `marca: ${this.marca} modello: ${this.modello} anno: ${this.anno}`
    }
    //---------------------------------------------------------------- aggiungi methodi------------------------------------



 aggiungichilometraggio(km){

  this.chilometraggio = this.chilometraggio + km 
}

 mostrachilometraggio (){
    return` ${this.chilometraggio}km`
}

// ----------------------------------------------------metodo privato------------------------------

 #calcolaEta(){
   return  this.età = 2025 - this.anno 

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

// -----------------------------------------Confronta Km-----------------------------------------

 static confrontaChilometraggio(auto11,auto12){
    if(auto11.chilometraggio >= auto12.chilometraggio){
        return auto11
    }
    else{
        return auto12
    }
}

// -----------------------------------------------incrementa contatore-------------------------------

#incrementaContatore(){
   return this.#contatorechiamato= this.#contatorechiamato + 1
}

// --------------------------------------------------aggiungi km ----------------------------------------

aggiungiChilometri(){
    this.#aggiungiChilometriChiamato++
    return this.#incrementaContatore() ;
    
}
// ----------------------------------------------------mostra contatore--------------------------------------------

mostraContatoreChiamate(){
    return this.#aggiungiChilometriChiamato
}
// -------------------------------------------------getter --------------------------------------------
get chilometraggio(){
    return this.chilometraggio
}


// ---------------------------------------setter ---------------------------------------

set chilometraggio(chilometraggio){
    if(chilometraggio >= this.chilometraggio){
        this.chilometraggio = chilometraggio
    }
}


// -------------------------------------------------veifica instanza ------------------------------------------
static verificaInstance(obj,classe){
    if(obj instanceof classe){
        return " obj è un instanza di classe"
    }
    else{
        return "obj non è un instanza di classe"
    }

}
}

let auto1 = new Automobile("audi","renault",2013,40);
let secondauto = new Automobile("TOYOTA","renault",2015,80)
 console.log(auto1)
 console.log(auto1.descrizione())
 auto1.aggiungichilometraggio(20)
 console.log(auto1.mostrachilometraggio())
 console.log(auto1.mostraEta())
 console.log(auto1._controllaChilometri())
 console.log(Automobile.confrontaChilometraggio(auto1,secondauto))
 console.log(auto1.aggiungiChilometri(20))
 console.log(auto1.aggiungiChilometri(20))
//  console.log(secondauto.mostraContatoreChiamate())
 console.log(auto1.mostraContatoreChiamate())
 console.log(auto1.chilometraggio())
console.log(Automobile.verificaInstance(obj,classe))




// -------------------------------------------------------------------------sotto classe Electrica----------------------------




// class Eletrica extends Automobile{
//     autonomia =0

//     constructor(marca,modello,autonomia){
//         super(marca,modello)
//         this.autonomia = autonomia
//     }
//      restruczione(){
         
//         return `${this.marca} ${this.modello},autonomia: ${
//             this.autonomia
//         } km`
//     }

//     ricarica(km){
//          this.autonomia += km 
//     }
// }

// let auto4 = new Eletrica ("audi","renault",100);
//  console.log(auto4.restruczione());  

// // ---------------------------------------------------saluta()----------------------------

// function Automobile(marca,modello) {
//     this.marca = marca
//     this.modello =modello
    
    
// }

//    Automobile.prototype.saluta = function(){
//     return `Ciao! ${this.marca} ${this.modello}`;
//    }
// let auto5 = new Automobile("toyota","renault")
// console.log(auto5.saluta())


// ----------------------------------------------------CAMION --------------------------------------
class Camion extends Automobile{
    caricoMassimo = 0
// ----------------------------------------------------carico massimo --------------------------------
    constructor(marca,modello,anno,caricoMassimo){
        super(marca,modello,anno)
        this.caricoMassimo = caricoMassimo
    }
    descrizione(){
        return `Marca: ${this.marca} Modello:${this.modello} Anno: ${this.anno} Caricomassimo:${this.caricoMassimo}`
    }

    carica(kg){
        if(kg < this.caricoMassimo){
            this.caricoMassimo += kg
        }
    
        return this.caricoMassimo
    }
}
let auto2 = new Camion("toyota" ,"renaul",2020,300+"kg")
console.log(auto2.descrizione())
console.log(auto2.carica(700))
// ----------------------------------------------------verifica instanza ---------------------------------------
if(auto1 instanceof Automobile){
    console.log("auto1 è un automobile")
}

if(auto2 instanceof Camion){
    console.log("auto2 è un camion")
}