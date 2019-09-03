
// __proto__ vs Prototype (difference ki & keno)

function Obj(a, b){
    this.a = a;
    this.b = b;
}

function Obj2(a, b, c){
    Obj.call(this, a, b);
    this.c = c;
}

function Obj3(){
    Obj2.call(this, 10, 15, 20);
}

Obj3.prototype = Object.create(Obj2.prototype);

var obj1 = new Obj(1, 2);
var obj2 = new Obj2(4, 5, 6);
var obj3 = new Obj3();


 // __proto__  == ei proto ta ekti object ke refer kore / onno ekti object er referance ...

 // protype == prototype holo ekta object...