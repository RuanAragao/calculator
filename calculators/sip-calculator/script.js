const calculate = ()=> {
    // get the inputs
    const principal = 0;//Took this zero because the formula which I used has p
    const monthlyInvestment = parseFloat(document.getElementById("monthly-investment").value);
    const rateOfInterest = parseFloat(document.getElementById("rate-of-interest").value);
    const timePeriodInYears = parseFloat(document.getElementById("time-period").value);
  
    // calculating
    const totInvested = parseInt(monthlyInvestment*12*timePeriodInYears);
    const rateOfInterestPerYear = rateOfInterest / 100;
    const rateOfInterestPerMonth = rateOfInterestPerYear / 12;
    let totalInvestment = principal;
    for (let year = 1; year <= timePeriodInYears; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvestment += monthlyInvestment;
        totalInvestment *= (1 + rateOfInterestPerMonth);
      }
    }
    const maturityAmount = Math.round(totalInvestment * 100) / 100;
    
    // result section
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The maturity amount after ${timePeriodInYears} years is <strong>${maturityAmount}</strong> Rs.`;

    resultDiv.innerHTML = `Invested Amount = <strong> &#8377; ${totInvested.toFixed(2)} </strong> <br>
                            Gains = <strong>&#8377; ${parseFloat(maturityAmount-totInvested).toFixed(2)}</strong><br>
                            Total Value = <strong>&#8377; ${parseFloat(maturityAmount).toFixed(2)}</strong>`;


  }

  const buttn = document.getElementById('calcButton');
    buttn.addEventListener('click',calculate);
  