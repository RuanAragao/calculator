const form = document.querySelector("form");
console.log(form);

// This will give us the blank value
// const weight = parseInt(document.getElementById("weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");
  if(height < 0 || height === '' || isNaN(height)){
    results.innerHTML="Enter the valid height"
  }
  else if(weight < 0 || weight === '' || isNaN(weight)){
    results.innerHTML="Enter the valid weight"
  }
  else{
     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

     //show the results
     results.innerHTML = `<span>${bmi}</span> `
  }
  
});
