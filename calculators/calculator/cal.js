let displayBtn = document.getElementsByClassName("btn");

let operators = []
let operands = []
let operatorUsed = false;

let screen = document.getElementById("calculations");
Array.from(displayBtn).forEach((element) => {
  element.addEventListener("click", (evento) => {
    if (element.id != "add" || element.id != "multiply" || element.id != "divide" || element.id != "subtract" || element.id != "equal") {
      // operands.push(element)
    }
  })
});

