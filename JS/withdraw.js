document.getElementById('btn-withdraw').addEventListener('click', function () {
	const withdrawField = document.getElementById('input-withdraw');
	const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);


    withdrawField.value = '';

    if (isNaN(withdrawAmount)) {
        alert('please enter a valid amount')
        return;
    }

	const totalWithdrawAmount = document.getElementById('withdraw-total');
	const totalWithdrawAmountString = totalWithdrawAmount.innerText;
    const totalWithdrawTotal = parseFloat(totalWithdrawAmountString);


    
     
    const totalWithdraw = totalWithdrawTotal + withdrawAmount;
    

    totalWithdrawAmount.innerText = totalWithdraw;
    

    const totalBalanceWithdraw = document.getElementById('balance-total');
    const totalBalanceWithdrawString = totalBalanceWithdraw.innerText;
    const totalBalanceWithdrawAmount = parseFloat(totalBalanceWithdrawString);
    if (withdrawAmount > totalBalanceWithdrawAmount) {
			alert('Sabdan taka nai');
			return;
		}
    
    const currentTotalWithdrawAmount = totalBalanceWithdrawAmount - totalWithdraw;
    totalBalanceWithdraw.innerText = currentTotalWithdrawAmount;

	
});