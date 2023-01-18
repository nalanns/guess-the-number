let button = document.getElementById("check");
let input = document.getElementById("number");
let counter = 1;

const randomNum = Math.round(Math.random() * 100);
console.log(randomNum);
input.focus();

button.addEventListener("click", () => {
  if (counter < 3 && input.value == randomNum) {
    alert("congratulations you won");
    input.value = "";
    demo();
  } else if (counter < 3 && input.value != randomNum) {
    if (input.value < randomNum) {
      alert("try again with grater number");
      counter++;
      input.value = "";
    } else if (input.value > randomNum) {
      alert("try again with lesser number");
      counter++;
      input.value = "";
    }
  } else if (counter == 3) {
    alert(`you lost, answer was ${randomNum}`);
    counter = 3;
    input.value = "";
    // demo()
    setTimeout("location.reload(true);", 1);
  }
});

window.addEventListener("load", () => {
  input.focus();
});

function demo() {
  let r = confirm("Do you want to play again?");
  if (r) {
    setTimeout("location.reload(true);", 1);
  }
}
