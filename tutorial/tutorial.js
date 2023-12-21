// function Person(firstname, lastname, dob) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`;
// };

class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Jane", "Doe", "3-6-1970");

console.log(person2.getFullName());

//Examine the documnet object
// console.dir(document);

// let inputText;
inputText = document.querySelector('input');
submit = document.getElementsByClassName('btn')

const itemLists = document.querySelectorAll('.list-group-item');

// console.log(itemLists);
submit[0].addEventListener('click', clicked);

function clicked(e){
    e.preventDefault();
    console.log(inputText.value);
}
console.log(submit[0]);

// const itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc'