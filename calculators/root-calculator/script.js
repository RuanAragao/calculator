const coa = document.getElementById("a");
const cob = document.getElementById("b");
const coc = document.getElementById("c");
const ans = document.getElementById("ans");
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    calculate();
});
const calculate = (e)=>{
    const a = coa.value;
    const b = cob.value;
    const c = coc.value;
    const d = (b*b) - 4*a*c;
    if (d>0){
        const r1 = ((-b + Math.sqrt(d))/(2*a)).toFixed(2);
        const r2 = ((-b - Math.sqrt(d))/(2*a)).toFixed(2);
        ans.innerHTML = "The roots are real and distinct : " + r1 + " & " + r2; 
    }
    else if (d==0){
        const r = ((-b)/(2*a)).toFixed(2);
        ans.innerHTML = "The roots are real and equal : "  + r + " & " + r;
    }
    else if (d<0){
        ans.innerHTML = "The roots don't exist";
    }
}