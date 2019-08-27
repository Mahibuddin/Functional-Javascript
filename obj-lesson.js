
// Basic Object Creation

var book = {
    name: 'functional javascript',
    authore: 'Micbel Fogus',
    publisher: 'O\'Reilly',
    page: 250,

    print:function(){
        console.log(this.name, this.authore);
        
    },
    
    
}

book.publisheryear = 2010;

console.log('Published Year = ' + book.publisheryear);

book['price'] = 45;

console.log('Book Price = ' + book.price);


    for(var props in book){
        console.log(props);
        console.log(props + ' = ' + book[props]);
        
    }



    
// Class Object Creation

