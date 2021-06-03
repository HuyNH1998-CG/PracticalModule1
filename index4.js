class Animal {
    name;
    weight;

    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName) {
        this.name = newName;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString() {
        return "Name: " + this.name + " Weight: " + this.weight
    }
}

let objAnimal1 = new Animal("Elephant",45.6)
// objAnimal1.setName("Elephant")
// objAnimal1.setWeight(45.6)
console.log(objAnimal1.getName())
console.log(objAnimal1.getWeight())
console.log(objAnimal1.toString())

let objAnimal2 = new Animal("Dog",10)
objAnimal2.setName("Mouse")
objAnimal2.setWeight(5)
console.log(objAnimal2.toString())
