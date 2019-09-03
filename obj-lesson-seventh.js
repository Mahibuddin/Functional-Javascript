
// Javascript New keyword

function Animal(name){
    this.name = name;
}

Animal.prototype.printName = function(){
    console.log(this.name);   
}

function myNew(constructor){  // object oriented e new keyword ta ki kaj kore, sheta ei functione dekhano holo... new keyword myNew functioner motoy kaj kore...
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;  
}

var cat = myNew(Animal, 'Twinckle Cats');

cat.printName();


// var cat = new Animal('Cat');
// var dog = new Animal('Dog');

// cat.printName();


var Person = function(name, age){
    this.name = name;
    this.age = age;
}

var p1 = myNew(Person, 'Mahib', 32);