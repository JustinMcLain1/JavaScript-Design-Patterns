//this is basically just a simplified API 
// to hide other low level details within the code base

class PlumbingSystem {
    //low level access to plumbing
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    //low level access to electrical system
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

//people in the house dont need access to these
//so make a facade to access the low level systems


//simplified wrapper

class House {

    //contains low level operations as dependinces 
    //but then simplifies the operation
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    //put them all into a single method so the
    //end user can just simply turn them on or off
    public turnOnSystem() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    public shutDown() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

const client = new House();

client.turnOnSystem();
client.shutDown();