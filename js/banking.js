function getInputValue(itputId){
    const inputField = document.getElementById(itputId);
    const amountValue = parseFloat(inputField.value);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    return previousBalance;
}
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + amount;
    }
    else{
       balanceTotal.innerText = previousBalance - amount; 
    }   
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }    
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('No');
    }
})