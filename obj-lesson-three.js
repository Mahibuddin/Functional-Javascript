
// this on object oriented javascript..

var obj = {
    name: 'Mahib Uddin',

    print: function(){
        console.log(this); // ekhane this keyword pura object tale call korse...
    }
}

obj.print();

function myFunc(){
    function inner(){
        console.log(this);
    }

    //inner(); // ekhaneo window object call korbe, karon ekhaneo kono object nei, eta pure function...
    new inner(); // ekhane object call korbe, karon ekhane new keyword use hoyse...

}

 myFunc(); // ekhane myFunc window object call kore, karon ekhane kono object nei, eta pure function...


 var Person = {
     name: 'Mahib',

     print: function(){
         console.log(this);
         
         console.log('Hello, ' + this.name);  
     }
 }

 Person.print();  // person.print() = persone > name => eta thikthak kaj korbe...

 // var myPrint = Person.name;
 // console.log(myPrint); // ekhane property call kora hoyse tai thikthak kaj korse...
 
 var myPrint = Person.print.bind(Person);  // ekhane print function call kora hoyse tai undefind dekhabe...

 var myPrint = function(){ // uporer Person.print ar ei function ta same jinish...
    console.log(this);  // ekhane this er mane holo window obj print korbe... & ei same this ta jodi uporer print functione call kori, tahole object takei call korbe...
    
    console.log('Hello, ' + this.name);  
}  // ekhane print function call kora hoyse tai undefind dekhabe...


    console.log(myPrint);  // eta ekta function print korbe...
    
 myPrint();  // myPrint function call korle undefind dekhanor karon holo : print function e this call kora ase... ar this ta kaj korse person object e...

 // == tahole ekhane bujhte hobe je, uporer object er vitorer print functione this call korar karone name ta print korse... kintu object er bairer functione, orthath myPrint functione this call korar karone sheta windows obj hoye jasse... tai name ta undefind dekhasse...

 // == ekhn object er baire theke access pete hole, bind method apply korte hobe...

 // var myPrint = Person.print.bind(Person); // evabe...

 var bindFunc = Person.print.bind(Person);

 bindFunc(); // ekhn ei function ta name print korbe...



 function add(num){
     return this.value + num;
 }

 var obj = {
     value: 10,
 }

 var obj2 = {
     value: 20,
 }

 // var result = add(10); // uporer functioner result nan dekhabe...
 // result;

 // ekhn bind method apply korle result dekhabe...

    var binded = add.bind(obj);  // bind method apply er karone 1st obj ta add functioner ekta object hoye jabe...
    var result = binded(50);
    result;

    // baire theke ekta functioner shathe ekta object ke bind kora hoyese, tai result ta print korse...



    var People = {
        name: 'Mahib',

        print: function(){
            //var name = this.name;
            
            setTimeout(function () {
                console.log('Hello...' + this.name);
                
            }.bind(this), 2000)
        }
    }

    People.print();
 