
// Basic Object Creation

var book = {
    name: 'functional javascript', // : use korar karon holo obj er vitore / {} er vitore... er baire hole = use kortam...
    authore: 'Micbel Fogus',
    publisher: 'O\'Reilly',
    page: 250,

    print:function(){ // this is called method not function
        console.log(this.name, this.authore);
        
    },
    
    
}

book.print();  // ekhane method tike call kora holo...

// javascript er jekono object ke baire theke extend korte pari... exmp : below...
book.publisheryear = 2010;  // = use korar karon holo object er baire...

console.log('Published Year = ' + book.publisheryear);

book['price'] = 45;

// amra 2 ta notation use korte pari, 1. dot notation  2. brakets notation... exmp: below...
console.log('Book Price = ' + book.price);
console.log('Book Price = ' + book['price']);

// kibave properties guloke travers korte pari...
    // for in loops er maddhome travers korbo ...
    for(var props in book){
        console.log(props); // object key show korte...
        console.log(props + ' = ' + book[props]); // object value show korte...
        
    }



