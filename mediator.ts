

//there is a many to many relationship
// this is dangerous 

// so make a mediator 
class Airplane {
    land() {}
}

class Runway {
    clear: boolean;
}


//mediator 
class Tower {
    clearForLanding(runway: Runway, plane: Airplane) {
        if(runway.clear) {
            console.log(`Plane ${plane} is clear for landing`);
        }
    }
}
const Runway25A = new Runway();
const Runway25B = new Runway();
const a = new Airplane();
const b = new Airplane();

//incoming request
// with a middlewear
// which converts the class into 
// the proper format for the response, the runway 