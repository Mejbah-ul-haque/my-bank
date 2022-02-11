document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit section
    const depositInput = document.getElementById('deposit-input');
    const newDepositValue = depositInput.value;
    const newDeposit = parseFloat(newDepositValue);
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDeposit = parseFloat(depositTotalText);

    const totalDepositAmount = previousDeposit + newDeposit;
    
    depositTotal.innerText = totalDepositAmount;

    //balance section
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);

    const totalBalanceAmount = previousBalance + newDeposit;
    balanceTotal.innerText = totalBalanceAmount;

    // clear input
    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    // withdraw Section
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const newWithdraw = parseFloat(withdrawValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(withdrawText);

    const totalWithdrawAmout = previousWithdraw + newWithdraw;
    withdrawTotal.innerText = totalWithdrawAmout;

    // Rest of Balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);

    const restOfBalance = previousBalance - newWithdraw;
    balanceTotal.innerText = restOfBalance;
    
    //clear input
    withdrawInput.value = '';
})