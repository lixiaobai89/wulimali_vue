<template>
    <body>
        <h1>Loan Amortization Calculator</h1>

        <label for="principal-amount">Principal Amount</label>
        <input type="number" id="principal-amount" step="0.01" required>

        <label for="annualized-rate">Annualized Rate (%)</label>
        <input type="number" id="annualized-rate" step="0.01" required>

        <label for="month-number">Number of Months</label>
        <input type="number" id="month-number" required>

        <!-- Currency selection -->
        <label for="currency-select">Select Currency</label>
        <select id="currency-select">
            <option value="¥">Chinese Yuan (¥)</option>
            <option value="$">US Dollar ($)</option>
            <option value="₱">Philippine Peso (₱)</option>
        </select>

        <el-button type="primary" @click="calculate">Calculate</el-button>

        <div class="result">
            <h2>Results</h2>
            <p id="monthly-payment-result">Monthly Payment: </p>
            <p id="total-payment-result">Total Payment (Principal + Interest): </p>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Payment</th>
                        <th>Interest</th>
                        <th>Principal</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody id="amortization-table">
                    <!-- Amortization data will be inserted here -->
                </tbody>
            </table>
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
      // Get the input values
        const principal = parseFloat(document.getElementById('principal-amount').value);
        const annualizedRate = parseFloat(document.getElementById('annualized-rate').value) / 100;
        const monthNumber = parseInt(document.getElementById('month-number').value);
        const currencySymbol = document.getElementById('currency-select').value;

        // Validate inputs
        if (isNaN(principal) || isNaN(annualizedRate) || isNaN(monthNumber) || principal <= 0 || monthNumber <= 0) {
            alert('Please enter valid numbers.');
            return;
        }

        // Monthly interest rate
        const monthlyRate = annualizedRate / 12;

        // Calculate monthly payment using the amortization formula
        const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, monthNumber)) / (Math.pow(1 + monthlyRate, monthNumber) - 1);

        // Initialize remaining balance (initially equals the principal)
        let remainingBalance = principal;

        // Clear previous table data
        const tableBody = document.getElementById('amortization-table');
        tableBody.innerHTML = '';

        // Loop through each month and calculate interest, principal, and remaining balance
        for (let month = 1; month <= monthNumber; month++) {
            // Calculate interest for this month
            const interest = remainingBalance * monthlyRate;

            // Calculate principal portion of the payment
            const principalPayment = monthlyPayment - interest;

            // Subtract principal payment from the remaining balance
            remainingBalance -= principalPayment;

            // Add row to table
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${month}</td>
                <td>${currencySymbol}${monthlyPayment.toFixed(2)}</td>
                <td>${currencySymbol}${interest.toFixed(2)}</td>
                <td>${currencySymbol}${principalPayment.toFixed(2)}</td>
                <td>${currencySymbol}${remainingBalance.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        }

        // Calculate total payment over the entire period
        const totalPayment = monthlyPayment * monthNumber;

        // Display overall results
        document.getElementById('monthly-payment-result').textContent = `Monthly Payment: ${currencySymbol}${monthlyPayment.toFixed(2)}`;
        document.getElementById('total-payment-result').textContent = `Total Payment (Principal + Interest): ${currencySymbol}${totalPayment.toFixed(2)}`;
    }
  }
}
</script>
<style>
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
        max-width: 600px;
        margin: auto;
    }
    label {
        display: block;
        margin-top: 10px;
    }
    input, select {
        padding: 5px;
        width: calc(100% - 12px);
    }
    button {
        margin-top: 10px;
        padding: 10px 15px;
        background-color: #007BFF;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .result {
        margin-top: 20px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    table, th, td {
        border: 1px solid black;
    }
    th, td {
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
</style>