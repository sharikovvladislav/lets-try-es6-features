let array = [1, 2, 3, 4];
for (let i of array) {
  console.log(i);
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = i;
    buttons[i].onclick = () => {
      console.log(i);
    }
  }
});