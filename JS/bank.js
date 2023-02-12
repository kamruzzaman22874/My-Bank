document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotalElement.innerText;
    const currentDepositAmount = parseFloat(depositTotalAmountString);

    const totalDepositAmount = currentDepositAmount + newDepositAmount;

    depositField.value = '';
    
    if (isNaN(totalDepositAmount)) {
        alert('Please provide a valid amount')
        return;
    }
    depositTotalElement.innerText = totalDepositAmount;
    
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceAmount = parseFloat(balanceTotalString);

    const totalBalanceAmount = balanceAmount + totalDepositAmount;
    
    balanceTotalElement.innerText = totalBalanceAmount;
    
})