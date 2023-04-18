// Виводити алерт
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//     alert('parent');
// })
//
// child.addEventListener('click', () => {
//     alert('child');
// })
//
// descendant.addEventListener('click', () => {
//     alert('descendant');
// })

// змінювати колір з алертом
// parent.addEventListener('click', changeBgColor)
//
// child.addEventListener('click', changeBgColor)
//
// descendant.addEventListener('click', changeBgColor)
//
// function changeBgColor (event) {
//     console.log(event.currentTarget)
//     event.currentTarget.style.backgroundColor = 'green';
// }

// bind
// const user = {
//     name: 'Mike',
//     surname: 'Smith',
//     sayHello () {
//         console.log(`Hello! My name is ${this.name} ${this.surname}`);
//     }
// };
//
// function showThis () {
//     console.log(this)
//     // this.sayHello()
// }
//
// const bindedFunction = showThis.bind(user); // this === user
// bindedFunction();


// прибирати зі сторінки
// parent.addEventListener('click', removeFromPage)
//
// child.addEventListener('click', removeFromPage)
//
// descendant.addEventListener('click', removeFromPage)
//
// function removeFromPage (event) {
//     event.currentTarget.style.display = 'none';
// }

// stopPropagation
// parent.addEventListener('click', event => {
//     alert('parent')
// })
//
// child.addEventListener('click', event => {
//     alert('child')
// })
//
// descendant.addEventListener('click', event => {
//     event.stopPropagation();
//     alert('descendant')
// })

// event target, currentTarget
parent.addEventListener('click', changeBgColor)

child.addEventListener('click', changeBgColor)

descendant.addEventListener('click', changeBgColor)

function changeBgColor (event) {
    // event.target.style.backgroundColor = 'green';
    event.currentTarget.style.backgroundColor = 'green';
}
