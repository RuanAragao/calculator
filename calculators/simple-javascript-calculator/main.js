
const operator = prompt('Please enter one of these operators to calculate (e.g +, -, *, /)');


const firstNum = parseFloat(prompt('Enter first number: ')); //prompt used to get input
const secondNum = parseFloat(prompt( firstNum +' '+ operator + ' ' + 'Enter second number: ')); //Parsefloat covetrs both integers and floats in operations.



//To perform validation, in case user inputs a value that isn't and integer or  a float
let answer = 0;
if(isNaN(firstNum) || isNaN(secondNum))//isNaN ia used to determine if the value is a number or not
    {
     alert('You inputed a wrong value, reload page & input digits to calculate');
}

else{
    if(operator == '+'){
        answer = firstNum + secondNum; 
    }
    else if(operator == '-'){
        answer = firstNum- secondNum;
    }
    else if(operator == '*'){
        answer = firstNum * secondNum;
    }
    else if (operator == '/'){
        answer = firstNum / secondNum;
    }

    //  ( operator != '+', '-', '*', '/'){
    //     alert('Enter an actual operator');
    // doesn't work}
    alert(firstNum + operator + secondNum + ' = ' + answer);
    
}



