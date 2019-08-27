

    var arrName = ['rahim','karim', 'rafiq', 'jabbar'];
    arrName.splice(2, 3);
    console.log(arrName);



    function name(firstName, lastName, gender){
        var output;
        if (gender == 'male') {
            output = 'Mr. '+ firstName + ' ' + lastName;
        }else if(gender == 'female') {
            output = 'Ms. '+ firstName + ' ' + lastName;
        }
        return output;
    }

    var fullName = name('Mahib', 'Uddin', 'male');
    console.log(fullName);



    function example(){
        return{
            name: 'Mahib',
            skill: ['HTML', 'JavaScript', 'PHP'],
            print: function(){
                console.log(this.name, this.skill);
                
            }
        }
    }

    var obj = example();
    obj;
    obj.print();



    // Higher order function start here...

    var arr = [2, 4, 7, 9, 0, 6];

    arr.forEach(function(a){
        console.log(a);
        
    });



    function caller(){
        return function(name){
            return 'Caller calling you ' + name;
        }
    }

    /* var x = caller();
    var y = x('Mahib Uddin');
    y;

    var z = x('IT Center');
    z; */

    var a = caller()('Cat');
    a;




    // callback function start here...

    /* function hello (name) {
        print(name);
        print('something else');
    }

    function print (args) {
        console.log(args);
        
    }

    hello('Hello Bangladesh...'); */



    function hello (name, print){
        print(name);
    }

    // hello('Mahib', print);

    // function print (args){
    //     console.log(args); 
    // }

    hello('Mahib', function(name){
        console.log('Hello ' + name);
        
    });

    hello('Mahib', function(name){
        console.log('Hi, how are you ' + name + ' ?');
        
    });

    hello('Bangladesh', function(name){
        console.log('Length of ' + name + ' is = ' + name.length + '.');
        
    });


    var me = {
        name: 'Mahib',
        age: 30,
        email: 'mahibuddin6@gmail.com'
    }

    function printMySelf(person, callback){
        console.log('Person: ' + person.name + '(' + person.age + ')');
        if (person.age >= 18) {
            callback(person.email);
        }else{
            console.log('you are not in range...');
        }
    }

    printMySelf(me, function(email){
        console.log('Email sent to ' + email);
        
    });



    function multiArg(data, callback1, callback2){
        console.log('Original Data: ' + data);
        callback1(data);
        callback2(data);
    }

    multiArg('Bangladesh is a small country...', function(data){
        var data = data.toUpperCase();
        console.log('Uppercase: ' + data);
        
    }, function(data){
        var data = data.toLowerCase();
        console.log('Lowercase: ' + data);
        console.log('Length: ' + data.length);
        
        
    });



    // Return function start here...


    function host(){
        console.log('I am host function...');
        function child(){
            console.log('I am child...');
            
        }
        return child();
    }

    host();




    function greetings(msg){
        /* return function(name){
            console.log(msg + ' ' + name);
            
        } */
        function ret(name){
            console.log(msg + ' ' + name);
        }

        return ret;
    }

    var hello = greetings('Hello');
    var hi = greetings('Hi');

    hello('Bangladesh');
    hi('Bangladesh');



// js closure start here ...

// function / scoper baire theke kono data call kora hole, shetai ekta closure...
// niche function ta 1 ta scope, var ta 1 ta data, ar ei data tai holo closure...

    var name = 'Mahib';

    function callName(){
        console.log('Hello, ' + name);
        
    }
    // console.dir(callName);
    callName();


    function greet(msg){
        return function(name){
            console.log(msg + ' ' + name);
            
        }   
    }

    var hello = greet('Hello');
    hello('Mahib');




    // array sorting start here...

    var newArr = [37, 72, 13, 10, 59, 9, 97, 47, 76,28];

    newArr.sort(function(a,b){
        //return a-b;
        return b-a;
    });
    newArr;




    var people = [
        {name: 'mahib', age: 30},
        {name: 'hasan', age: 27},
        {name: 'sakib', age: 18},
        {name: 'naim', age: 26},
        {name: 'rasel', age: 25},
        {name: 'saleh', age: 12},
        {name: 'abir', age: 28}
    ]

    /* people.sort(function(y, z){
         return z.age-y.age;

        
    }); */

    people.sort(function(c, d){
        if (c.name > d.name) {
            return 1;
        }else if(c.name < d.name){
            return -1;
        }else{ return 0;}
    });
    console.log(people);


    // foreach function implementation start here...

    var arry = [1, 9, 7, 2, 3, 4, 5];

    /* arry.forEach(function(element, index, arry){
        console.log('Element is = ' + element + ' Index is = ' + index + ' Array is = ' + arry);
        
    }); */

    function loop(arry, callback){
        for(var i=0; i<arry.length; i++){
            callback(arry[i], i);
        }
    }
    loop(arry, function(element, index){
        console.log('Element is = ' + element + ' Index is = ' + index);
        
    });



    // filter function implementation start here...

    var oddArr = [1, 9, 7, 2, 3, 4, 5];
    /* var newArry = [];

    for(var i=0; i<oddArr.length; i++){
        if (oddArr[i]%2 == 1) {
            newArry.push(oddArr[i]);
        }
    }
    newArry;
    console.log('New Array = ' + newArry); */

    /* var newarr = oddArr.filter(function(value){
        return value % 2 == 1;
    });

    console.log('New Array = ' + newarr); */

    function myFilter(oddArr, callback) {
        var newArry = [];

        for (var i = 0; i < oddArr.length; i++) {
            if (callback(oddArr[i])) {
                newArry.push(oddArr[i]);
            }
        }
        return newArry;
    }

    var myArr = myFilter(oddArr, function (element) {
        return element % 2 == 1;
    });

    console.log('My Array Filtered Data = ' + myArr);


    // map function implementation start here...


    var mArr = [1, 9, 7, 2, 3, 4, 5];

    /* var mapedArr = [];

    for(var i=0; i<mArr.length; i++){
        mapedArr.push(mArr[i] + 2);
    }
    console.log(mapedArr); */

    /* var mpArr = mArr.map(function(value){
        return value + 2;  // array te +, -, *, / kora jabe
    });
    console.log('New Array = ' + mpArr); */

    function myMap(mArr, callback) {
        var newArr = [];

        for (var i = 0; i < mArr.length; i++) {
            newArr.push(callback(mArr[i]));

        }
        return newArr;
    }

    var myArr = myMap(mArr, function (value) {
        return value + 4 - 2 * 3;
    });

    console.log('My Array = ' + myArr);


                // reduce function start here...

    /* var sum = 0;
    for( var i=0; i<mArr.length; i++){
        sum+= mArr[i];
    }
    console.log('Sum = ' + sum); */

    var result = mArr.reduce(function (a, b) {
        return a * b;
    });
    
    console.log('Result = ' + result);

// add for git


    
            
            
            


            
            


            




        
        
        