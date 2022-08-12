//create the object step by step using methods
//rather than using a constructor

// like so

class HotDog {
    ketchup: boolean;
    mustard: boolean;
    pickels: boolean;
    constructor(string: string) {}

    addKetchup() {
        this.ketchup = true;
        return this; // reference to the object instance
    }

    addMustard() {
        this.mustard = true;
        return this; //this allows to implement method chaining
    }

    addKPickels() {
        this.pickels = true;
        return this; // where we instantiate an object then chain 
        //methods to it but always get the object as the return value;
    }

}

const myLunch = new HotDog('gluten free')

myLunch
    .addKetchup()
    .addKPickels()
    .addMustard();

//this is frequent with JQuery