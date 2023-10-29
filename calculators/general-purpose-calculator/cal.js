let displayBtn = document.getElementsByClassName("btn");

let operators = []
let operands = [0]
let operatorUsed = false;

let screen = document.getElementById("calculations");
Array.from(displayBtn).forEach((element) => {
  element.addEventListener("click", (evento) => {
    if (element.id != "add" && element.id != "multiply" && element.id != "divide" && element.id != "subtract" && element.id != "equal" && element.id != "clear") {
      if(operatorUsed){
        operands.push(parseInt(element.innerHTML))
        operatorUsed = false;
      } else {
        operands.push(operands.pop()*10 + parseInt(element.innerHTML))
      }
      screen.innerHTML += element.innerHTML
      console.log(operands)
    } else {
      if(!operatorUsed){
        if (element.id == "equal"){
          while(operands.length != 1){
            oprtr = operators.pop()
            oprnd2 = operands.pop()
            oprnd1 = operands.pop()
            if(oprtr == "+"){
              operands.push(oprnd1 + oprnd2);
            } else if(oprtr == "-"){
              operands.push(oprnd1 - oprnd2);
            } else if(oprtr == "*"){
              operands.push(oprnd1 * oprnd2);
            } else if(oprtr == "/"){
              operands.push(oprnd1 / oprnd2);
            }
          }
          console.log(operands[0])
          screen.innerHTML = operands[0]
        } else if (element.id == "clear") {
          operands = [0]
          operators = []
          operatorUsed = false
          screen.innerHTML = ""
        } else {
          operators.push(element.innerHTML)
          operatorUsed = true
          screen.innerHTML += element.innerHTML
        }
      }

      console.log(operators)
    }



  })
});

