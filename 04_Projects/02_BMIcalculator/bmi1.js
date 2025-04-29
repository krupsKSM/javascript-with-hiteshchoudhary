const form =  document.querySelector('form')

form.addEventListener('submit', (action) => {
    action.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const username = document.querySelector('#username').value; 
    // Access the value of the username input
    const result = document.querySelector('#result');

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height ${height}`
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;
        let bmiVal;
        if (bmi < 18.6) bmiVal = "UNDERWEIGHT";
        else if (bmi > 18.6 && bmi < 24.9) bmiVal = "HEALTHY";
        else bmiVal = "OVERWEIGHT";
        result.innerHTML = `<span>Hi ${username}, Your BMI is ${bmi} and you are ${bmiVal}.</span>` ;
    }

})