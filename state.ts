//allows you to start with one base class 
// then provide it with different functionality 
//based on its internal state
//like a finite state machine
//make objects predictable

//normally you make a switch statement

class Human {
    think(mood){
        switch(mood) {
            case 'Happy':
                return 'I am Happy!';
            case 'Sad':
                return 'I am Sad :(';
            default:
                return 'I am Chillin';

        }
    }
}

//the alternative is to make seperate classes

//Human

//each class has an identical method that behaves differently
//state is a property & whenever it is called its deligated
// to that specific state, so when the state changes the object
//behaves differently

interface State {
    think(): string;
}

class Human {
    state: State;

    constructor() {
        this.state = new HappyState();
    }

    think() {
        return this.state.think();
    }

    changeState(state) {
        this.state = state;
    }
}

class HappyState implements State {
    think() {
        return 'I am Happy!';
    }
}


class SadState implements State {
    think() {
        return 'I am Sad!';
    }
}