
class car {
    constructor(brand,price,speed,color){
        this.brand=brand;
        this.price=price;
        this.speed=speed;
        this.color=color;
    }
    output (){console.log(`I need the world greatest ${this.brand} car brand\nThe company fixed the amount of the car is ${this.price} \nThe average speed of the car is ${this.speed} \nAnd i want the premium of ${this.color} color`)}
}
const js = new car("BENZ","90000$","310KMPH","BLACK");
js.output();