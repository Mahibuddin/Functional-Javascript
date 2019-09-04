

// Execution Context 

// Amra je invironment te javascript code ta ke run korbo, shetai mainly ekta context... Execution context ke ekta box, kinba ekta container er shtahe tulona kora jai... ei container ba box ta everythings dhore rakhbe... like : variable, variable-declaration, function-declaration, kothai kon code ta call kora hobe, kon variable er value ta ki, eshob kichu je dhore rakhbe, shetai hosse execution context... Abar eta ke object o vaba jete pare...


// **  Execution Context is Where a Peace of Code is Being Executed...

// **  Default Execution Context is Either Window or Global...

// **  You can think Execution Context as an object ...


        // Execution Context  : 

// Code that is not inside any function
// Associated with global object
// In Browser whis is window Object
// In Node Js which is Global object

// Whatever we declare in the Global Context is automatically attached  with the Window Object


// What about the code which is inside in a function ?
// Whenever we call a new function it will get a brand new context for its own



            // Execution Stack  : 

    var name =  'Mahib';

    function a (){
        b();
        var a = 'I am in Function A';
        console.log(a);       
    }

    function b (){
        c();
        var b = 'I am in Function B';
        console.log(b);    
    }

    function c (){
        console.log('Hello ' + name);
        var c = 'I am in Function C';
        console.log(c);     
    }

    a();


// Ekhane 1st variable name er output dekhabe, then function c er output show korbe, then function b er output & then function a er output show korbe...
    // 1. Hello Mahib
    // 2. I am Function C
    // 3. I am Function B
    // 4. I am Function A     ....evabe output dibe, etai holo Execution Stack...



            // Execution Context Object :

    // 1. Variable Object
    // 2. Scope Chain
    // 3. This Variable


    // Whene a function get call, there create a new execution context and it happens in two step...

        // 1. Creational phase
        // 2. Execution phase

    // 1. Creational phase : a) Create variable object & b) Create Scope Chain...

    // 2. Execution phase : a) Determine Value of "this", b) Read & Run line by line & c) Define all variables


        // Hoisting & Variable Object creation

    // Hoisting  : Javascript er jekono code Executioner purbe creational 1 ta phase ashe, shei phase e shomosto variable & function gulo ke khuje ber kore store kora hoy ebong jekhane variable guloke undefined declare kore deya hoy, ebong funtion gulo ke tar referance onujayi store kora hoy orthath jekhane funtion thake shei function onujayi tar point kora hoy, etai mainly Hoisting... jar fole porobortite creational phase ashar purbe amra ei veriable gulo ebong function gulo bebohar korte pari... etai mainly Hoisting...