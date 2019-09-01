    
// Class Object Creation (constructor pattern)

// exmp : one
function People() {
    console.log('I have constructed...');
    
}

var p1 = new People();  // new keyword er karone obj created hosse...

// exmp : two

function Person(name, email) {
    this.name = name;  // new keyword call korle ei this hobe object er this... &
    this.email = email; // new keyword call na korle ei this kono this e na, eita just global...
    this.print = function() {
        console.log('Name : ' + this.name);
        
    }
}
 
var per1 = new Person('Mahib', 'mahibuddin6@gmail.com');
var per2 = new Person('Shamim', 'khondoker.shamim@gmail.com');
var per3 = new Person('Shahin', 'shahin.alam@gmail.com');

var allper = [per1, per2, per3];

console.log(per1.name); // new keyword ta bad diye dekhen ki hoyh...
console.log(per1.email);

console.log(allper);

// ekhn loop chaliye dekhbo...

allper.forEach(function name(person) {
    console.log("Email " + person.email);
    person.print();
})


// ekhn for in loops er maddhome travers korbo ...

for(var props in per1){
    console.log('Properties : ' + props);
    
}


// ekhn ar 1 ta obj create korbo...

function Book(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Functional Javascript', 'Micbael Fogus', 30);
// jodi amra ekhn dekhte chai ei book tar constructor ta ki, tahole...
console.log(book.constructor);

