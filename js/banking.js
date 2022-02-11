


function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const newDeposit = parseFloat(depositInput.value);
     // clear input
    depositInput.value = '';
    return newDeposit;
}




document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit section
    // const depositInput = document.getElementById('deposit-input');
    // const newDeposit = parseFloat(depositInput.value);
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = parseFloat(depositTotal.innerText);
    depositTotal.innerText = previousDeposit + newDeposit;
    
    //balance section
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance + newDeposit;

    // clear input
    // depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    // withdraw Section
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdraw = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdraw + newWithdraw;

    // Rest of Balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance - newWithdraw;
    
    //clear input
    withdrawInput.value = '';
})