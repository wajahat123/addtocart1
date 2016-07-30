class Advertise{
    name:string;
    model:string;
    color:string;
    price:number;
   
    constructor(name:string, model:string,color:string, price:number){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
        
    }
}


class Trucks extends Advertise {
    constructor(name:string, model:string,color:string, price:number) {
        super(name,model,color,price);
        document.getElementById('all').innerHTML += "<div class='adv'><h2> Mobile Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

        document.getElementById('trucks').innerHTML += "<div class='adv'><h2> Mobile Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    }
}

class Car extends Advertise{
    
    constructor(name:string, model:string,color:string, price:number){
    super(name,model,color,price);
    document.getElementById('all').innerHTML += "<div class='adv'><h2> Car Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

     document.getElementById('car').innerHTML += "<div class='adv'><h2> Car Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    
    }
}

class Bike extends Advertise{
    
    constructor(name:string, model:string,color:string, price:number){
   super(name,model,color,price);
    document.getElementById('all').innerHTML += "<div class='adv'><h2> Bike Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p><p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";

     document.getElementById('bike').innerHTML += "<div class='adv'><h2> Bike Adertise </h2> <p class='brand'>Brand <br><span>" + name + "</span></p> <div class='mod_col'><p class='model'> Model<br><span>" + model + "</span></p> <p class='color'> Color<br><span>" + color + "</span></p></div> <p class='price'> Price <br><span>" + price + "</span></p> </div>";
    
    }
}

let addvertise =[
    new Trucks('Nissan Navara','2016','Black',30000),
    new Car('Mehran','2015','White',869888),
    new Bike('SUZUKI','2015','Black',1550000),
    new Car('TOYOTA','2013','Black',136000),
    new Trucks('AvtoVAZ','2015','White',10000),
    new Bike('HONDA','2016','Silver',660000),
    new Trucks('Chevrolet','2013','Silver',50000),
    new Car('Khyber','2004','Green',2454000),
    new Trucks('Daihatsu','2015','silver',780000),
    new Bike('YAMAHA','2012','Red',105000),
    new Car('BMW','2016','Black',2150500),
    new Trucks('Dongfeng','2014','White',70000),
    new Car('Alto','2014','Green',1789999)
];