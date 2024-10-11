<template>
    <body>
        <div class="container">
            <h1>{{ $t('CompoundInterestCalculator.title') }}</h1>

            <label for="currency">{{ $t('CompoundInterestCalculator.currencylab') }}:</label>
            <select id="currency">
                <option value="$">{{ $t('CompoundInterestCalculator.Dollar') }} ($)</option>
                <option value="¥">{{ $t('CompoundInterestCalculator.Yuan') }} (¥)</option>
                <option value="₱">{{ $t('CompoundInterestCalculator.Philippine_Peso') }} (₱)</option>
            </select>

            <label for="principal">Principal Amount:</label>
            <input type="number" id="principal" placeholder="Enter initial amount">

            <label for="rate">Annual Interest Rate (%):</label>
            <input type="number" id="rate" placeholder="Enter interest rate">

            <label for="times">Times Compounded per Year:</label>
            <input type="number" id="times" placeholder="e.g., 4 for quarterly">

            <label for="years">Number of Years:</label>
            <input type="number" id="years" placeholder="Enter the number of years">
            
            <el-button type="primary" @click="calculate">Calculate</el-button>

            <div class="result" id="result"></div>
        </div>

        
    </body>
</template>

<script>
    export default {
        methods: {
            // The function that will be triggered when the button is clicked
            calculate() {
            console.log("Calculation triggered!");
            // Add your calculation logic here
            // Get user inputs
            const currency = document.getElementById('currency').value;
            const principal = parseFloat(document.getElementById('principal').value);
            const rate = parseFloat(document.getElementById('rate').value) / 100;
            const times = parseFloat(document.getElementById('times').value);
            const years = parseFloat(document.getElementById('years').value);

            // Compound Interest Formula: A = P(1 + r/n)^(nt)
            const amount = principal * Math.pow((1 + rate / times), times * years);

            // Display the result with the selected currency
            document.getElementById('result').innerHTML = `After ${years} years, the total amount will be ${currency}${amount.toFixed(2)}`;
            }
        }
    }
</script>
<!-- <style>
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
    }
    .container {
        max-width: 400px;
        margin: auto;
    }
    label, input, select {
        display: block;
        margin-bottom: 10px;
        font-size: 1.1em;
    }
    input, select {
        width: 100%;
        padding: 8px;
        font-size: 1.1em;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        padding: 12px;
        background-color: #28a745;
        color: white;
        font-size: 1.1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
    }
    button:hover {
        background-color: #218838;
    }
    .result {
        margin-top: 20px;
        font-size: 1.1em;
    }
</style> -->