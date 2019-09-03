
// Various Method Exmp : bind, call, apply


function printMe (){
    console.log('Hello ' + this.name);    
}


var obj1 = {
    name: 'Mahib',
    age: 32
}

var obj2 = {
    name: 'shahin',
    email: 'shahin123@gmail.com'
}

//  jekono objecter shathe uporer function ta bind kore 1 ta function return kora...

// var binded1 = printMe.bind(obj1);
// var binded2 = printMe.bind(obj2);

// binded1();
// binded2();


// printMe(); // bind korar por oi function ta funtion e return korbe, tai bind method ke variable e niye return korbo...

printMe.call(obj1); // call method use korar karone, instant output dibe, bind method e jeta variable niye function return korte hoyesilo, jeta amra upore koresilam(commenter vitore)...

printMe.call(obj2)

// ekhn apply method eo same but uporer functione argument use korle different ashbe... Exmp below :

function add(a, b){
    return (a + b) * this.c;
}

var obj5 = {
    c: 3
}

var obj6 = {
    c: 5
}

var res = add.call(obj5, 10, 4);
res;

var res2 = add.apply(obj6, [10, 4]);  // apply er karone, argument_e array use korte hoyese... this is the difference... nothing else...
res2



// Bind = Functioner baire jekono object ke bind kora...
// Call = Instant result dekhano, ja bind e dekhai na...
// Apply = Call methoder motoi but functioner arg er jonno array use kora...