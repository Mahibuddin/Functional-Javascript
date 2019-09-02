
// Basic prototype

// function Person (name, age){
//     this.name = name,
//     this.age = age,

//     this.hello = function(){  // jehetu shokol personer jonno ei method call korbo,tai ei method take object er baire theke call korbo... ar je jaigai amader shokol method gulake rakhbo,shetake bola hoy prototype
//         console.log('Hello ' + this.name);
        
//     }
// }

function Person (name, age){
    this.name = name,
    this.age = age
}


// Person.prototype.hello = function(){  // jehetu shokol personer jonno ei method call korbo,tai ei method take object er baire theke call korbo... ar je jaigai amader shokol method gulake rakhbo,shetake bola hoy prototype... // prototype holo ekta object...
//     console.log('Hello ' + this.name); 
    
// }

// Person.prototype.print = function(){
//     console.log(this.name, this.age);
    
// }

// Person.prototype.email = 'mahibuddin6@gmail.com';


Person.prototype = {
    hi: function(){
        console.log('Hi ' + this.name);  
    },

    echo: function(){
        console.log(this.name, this.email);       
    },

    email: 'mahib23@gmail.com'
}



var p1 = new Person('MAhib', 32);
var p2 = new Person('Saleh', 23);

console.log(p1);
console.log(p2);

// console.log(Person.prototype);

