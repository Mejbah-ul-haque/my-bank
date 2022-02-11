


function getInputValue(itputId){
    const inputField = document.getElementById(itputId);
    const amountValue = parseFloat(inputField.value);
     // clear input
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amount;
}



document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit section
    // const depositInput = document.getElementById('deposit-input');
    // const newDeposit = parseFloat(depositInput.value);
    const amount = getInputValue('deposit-input');
    
   /*  const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = parseFloat(depositTotal.innerText);
    depositTotal.innerText = previousDeposit + newDeposit; */
    
    updateTotalField('deposit-total', amount);

    //balance section
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance + amount;

    // clear input
    // depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    // withdraw Section
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdraw = parseFloat(withdrawInput.value);
    const newWithdraw = getInputValue('withdraw-input');

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = previousWithdraw + newWithdraw; */

    updateTotalField('withdraw-total', newWithdraw);

    // Rest of Balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance - newWithdraw;
    
    //clear input
    // withdrawInput.value = '';
})