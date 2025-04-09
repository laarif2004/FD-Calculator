function getmaturityamount() {
    const principleInput = document.getElementById("principle").value.trim();
    const interestInput = document.getElementById("interest-rate").value.trim();
    const tenureInput = document.getElementById("tenure").value.trim();
    const resultElement = document.getElementById("result");
    
    if (!principleInput || !interestInput || !tenureInput) {
        resultElement.innerText = "Error: All fields are required!";
        resultElement.classList.add("error");
        return;
    }

    const principle = parseFloat(principleInput);
    const interest = parseFloat(interestInput);
    const tenure = parseFloat(tenureInput);

    if (isNaN(principle) || isNaN(interest) || isNaN(tenure)) {
        resultElement.innerText = "Error: Please enter valid numbers!";
        resultElement.classList.add("error");
        return;
    }

    if (principle <= 0 || interest <= 0 || tenure <= 0) {
        resultElement.innerText = "Error: Values must be positive!";
        resultElement.classList.add("error");
        return;
    }
    resultElement.classList.remove("error");
    resultElement.style.color='green';
    // Calculate maturity amount (Simple Interest)
    const maturityamount = principle + (interest * principle * tenure / 100);

    // Display result
    resultElement.innerText = `Maturity Amount: ${maturityamount.toFixed(2)}`;
}

document.getElementById("calculate").addEventListener('click', getmaturityamount);