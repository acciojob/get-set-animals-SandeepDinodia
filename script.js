//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return this.species;
	}
}
class Cat extends Animal{
	purr(){
		console.log("purr")
	}
}
class Dog extends Animal{
	bark(){
		console.log("woof")
	}
}
const makesound=makeSound(){
	console.log();
}

class Dog extends Animal {}

class Cat extends Animal {}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
