


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

    const amount = getInputValue('deposit-input');
       
    updateTotalField('deposit-total', amount);

    //balance section
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance + amount;
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    const newWithdraw = getInputValue('withdraw-input');

    updateTotalField('withdraw-total', newWithdraw);

    // Rest of Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    balanceTotal.innerText = previousBalance - newWithdraw;
})