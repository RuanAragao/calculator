
function calculate(){
    const x = document.getElementById("original").value;
    const y = document.getElementById("discount").value;
    
    const saving =  (0.01*y*x).toFixed(2);
    const discounted_price= (x - saving).toFixed(2);
    
    console.log(saving);
    
    document.querySelector("#result").innerHTML=(`You saved Rs ${saving} <br> Discounted Price is Rs ${discounted_price}`);
} 

function reset(){
    document.getElementById("original").value="";
    document.getElementById("discount").value="";
    document.getElementById("result").innerHTML="";
}

