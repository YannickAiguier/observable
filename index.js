import Observable from "./observable.js";

const observer1 = (data) => console.log(`Observer1 received data : ${data}`);
const observer2 = (data) => console.log(`Observer2 received data too : ${data}`);

const myButton = document.getElementById('btn');
const myTest = document.getElementById('test');

createObserver(myButton, 'click', observer1, 'Clic !!!!!!!');
createObserver(myTest, 'mouseover', observer2, 'Mouse over !!');

function createObserver(myElement, myEvent, myObserver, data) {
    const observable = new Observable();
    observable.addObserver(myObserver);
    myElement.addEventListener(myEvent, function (event) {
        observable.notifyObservers(data);
    })
}