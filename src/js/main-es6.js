let array = [1, 2, 3, 4];
for (let i of array) {
  console.log(i);
}

class Animal {
  sound () {
    console.log('abstract');
  }
}

class Cat extends Animal {
  sound () {
    console.log('Meow');
  }
}

class Dog extends Animal {
  sound () {
    console.log('Bark');
  }
}

var cat = new Cat();
cat.sound();

var dog = new Dog();
dog.sound();

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = i;
    buttons[i].onclick = () => {
      console.log(i);
    }
  }
});