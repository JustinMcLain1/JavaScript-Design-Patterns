//classes can be extended by a subclass
//leads to complex heirarchy

// Prototype creates a chain 
//that makes it easier to share functionality

//prototype
const zombie = {
    eatBrains() {
        return 'yummy Brains';
    }
}

//the clone 
//using object create to pass zombie as prototype

const GigaChad = Object.create(zombie, {  name: { value: 'GigaChad'} });

//when logging you will only see the name
console.log(GigaChad);

//but if you call the method inside the object prototype
// it is still valid because Javascript goes up the chain 
// looking for methods or properties on the parent objects

GigaChad.eatBrains();

//you can get the prototype by calling

GigaChad.__proto__;

//this is not best practice though its best to do this
Object.getPrototypeOf(GigaChad);

//for classes prototype refers to its constructor
//and you can extended the class with additional functions
//but this is bad practice 

//Modifiying built in objects is a no no 
// you do not want to modify built in types by adding methods
// to the constructors or their prototypes
//avoid depoending on libraries that do this.

Array.prototype.bad = function() {
    console.log('im bad')
}


