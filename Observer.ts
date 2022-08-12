//one to many relationship
//events broadcast by other objects
import {Subject} from 'rxjs';

//data we want to listen to
const news = new Subject();

const tv1 = news.subscribe(v => console.log(v + 'via den TV'));
const tv2 = news.subscribe(v => console.log(v + 'via  batcave TV'));

//broadcast to push new value into the subject

news.next('Breaking news: ');