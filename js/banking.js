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
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + amount;
    }
    else{
       balanceTotal.innerText = previousBalance - amount; 
    }   
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotalField('deposit-total', amount);
    updateBalance(amount, true);
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', amount);
    updateBalance(amount, false);
})