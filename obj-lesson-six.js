
// Javascript e- Inheritance with prototype

// Inheritence = onno 1 ta objecter boishishto nijer vitore inherit kora... orthath 1 ta obj theke ar 1 ta obj _e inherit kora...


function Person (){
    this.name = 'Mahib';
}

function Teacher (){
    Person.call(this); // Inherit
    this.subject = 'Javascript';
}

var teacher = new Teacher(); // Object

var name = teacher.name;

console.log(name);








function People(name){
    this.name = name;
}

People.prototype.printName = function(){   // Prototype
    console.log('Name : ' + this.name);
    
}

People.prototype.another = function(){
    console.log('This is an another Function ');
    
}

function Student (name, id){
    People.call(this, name); // Inherit (name properties ta Student er ontorvukto hoye gelo...)
    this.id = id;
}


 // ekhn prototype take 2 vabe inherit korte pari...

 // 1 holo : Exmp...
  Student.prototype = Object.create(People.prototype); // prototype inherit...  // Object.create ekta method, er kaj holo : kono ekta object theke ar ekta object create kore return korbe...

 // 2 holo : Exmp...
 // Object.setPrototypeOf(Student.prototype, People.prototype);  // ei method tao use kore prototype inherit korte pari...

 Student.prototype.constructor = Student;  // Constructor bole diyesi...



 var student = new Student('Mahib Uddin', 1239);


 
