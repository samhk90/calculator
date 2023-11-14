// Get the input element
let res = document.getElementById('input');
// Get the h2 element
let display = document.getElementById('display');
display.innerHTML = 0;
// Add an event listener to the input element
inputElement.addEventListener('input', function() {
    // Update the h2 element with the input value
    displayElement.innerHTML = inputElement.value;
});
function livescreen(value) {

    res.value += value;
}
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calc(res.value);

  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
function clearscreen() {
    res.value = "0";
    display.innerHTML = res.value;
    res.value = " ";
}
function calc(){
    res.value = eval(res.value);
    display.innerHTML = res.value;
}
function backspace() {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
    if(res.value == ""){
        res.value = "0";
        display.innerHTML = res.value;
        res.value = " ";
    }
    display.innerHTML = res.value;
    res.value = " ";
}