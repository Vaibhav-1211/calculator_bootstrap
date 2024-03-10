// // Define variables to store the current number, previous number, and operation
// let currentNumber = "";
// let previousNumber = "";
// let operation = "";

// // Function to update the display with the current number
// function updateDisplay(number) {
//   document.getElementById("display").textContent = number;
// }

// // Function to handle number button clicks
// function handleNumberClick(number) {
//   currentNumber += number;
//   updateDisplay(currentNumber);
// }

// // Function to handle operation button clicks
// function handleOperationClick(op) {
//   previousNumber = currentNumber;
//   currentNumber = "";
//   operation = op;
// }

// // Function to handle the equals button click
// function handleEqualsClick() {
//   let result;
//   switch (operation) {
//     case "+":
//       result = parseFloat(previousNumber) + parseFloat(currentNumber);
//       break;
//     case "-":
//       result = parseFloat(previousNumber) - parseFloat(currentNumber);
//       break;
//     case "*":
//       result = parseFloat(previousNumber) * parseFloat(currentNumber);
//       break;
//     case "/":
//       result = parseFloat(previousNumber) / parseFloat(currentNumber);
//       break;
//     default:
//       result = currentNumber;
//   }
//   currentNumber = result.toString();
//   operation = "";
//   updateDisplay(currentNumber);
// }

// // Function to handle the clear button click
// function handleClearClick() {
//   currentNumber = "";
//   previousNumber = "";
//   operation = "";
//   updateDisplay(currentNumber);
// }

// // Attach event listeners to the buttons
// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonText = button.textContent;
//     if (/\d/.test(buttonText)) {
//       handleNumberClick(buttonText);
//     } else if (buttonText === "+/-") {
//       // Handle sign change functionality here
//     } else if (buttonText === "%") {
//       // Handle percentage functionality here
//     } else if (["+", "-", "*", "/"].includes(buttonText)) {
//       handleOperationClick(buttonText);
//     } else if (buttonText === "=") {
//       handleEqualsClick();
//     } else if (buttonText === "C") {
//       handleClearClick();
//     }
//   });
// });

//clear
document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector('#display').value = " ";
    // document.querySelector('#display').style.fontSize = '24px'
})

//backspace function
const backSpace = () => {
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
}

// one function
const one = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "1";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value += "1";
    }
}

// two function
const two = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "2";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "2";
    }
}

// three function
const three = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "3";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "3";
    }
}

// four function
const four = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "4";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "4";
    }
}

// five function
const five = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "5";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "5";
    }
}

// six function
const six = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "6";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "6";
    }
}

// seve function
const seven = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "7";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "7";
    }
}


// eight function
const eight = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "8";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "8";
    }
}

// nine function
const nine = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "9";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "9";
    }
}

// zero function
const zero = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = "0";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + "0";
    }
}

// point function
const point = () => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = ".";
    }
    else {
        document.querySelector('#display').value = document.querySelector("#display").value + ".";
    }
}
const updateColor = () =>{
    let color = document.getElementById('color-picker');
    document.getElementById('display-color').style.background = color.value
}


// function adjustFontSize() {
//     var display = document.getElementById('display');
//     if (display.scrollHeight > display.clientHeight) {
//       var currentFontSize = parseFloat(window.getComputedStyle(display, null).getPropertyValue('font-size'));
//       display.style.fontSize = (currentFontSize - 1) + 'px';
//     }
//   }