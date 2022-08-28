
class IOSButton{}
class AndroidButton{}
let os;
//without a factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();

//create a subclass or function to figure 
//out which object to instantiate

class ButtonFactory {
    createButton(os: string) {
        if (os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

//with this we use the factory to determine
// which button should be rendered

const factory = new ButtonFactory();
const btn1 = factory.createButton("ios");
const btn2 = factory.createButton("android");
