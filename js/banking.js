//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('This is deposit button');
    
    //get the amount deposited
    const depositInput =document.getElementById('deposit-input');
     
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);
     
    //update deposit total
    const depositTotal =document.getElementById('deposit-total');

   const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

   const newDepositUpdateTotal = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = newDepositUpdateTotal;

    //update balance amount
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(balanceTotalText);
     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
     balanceTotal.innerText = newBalanceTotal;

    //clear the input deposit field
    depositInput.value ="";
});

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdar click');
    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawAmountText =withdrawInput.value;
    // console.log(withdrawAmountText);
    const newWithdrawAmount = parseFloat(withdrawAmountText);
//   console.log(newWithdrawAmount);

  //set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal =parseFloat(previousWithdrawText);

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  withdrawTotal.innerText = newWithdrawTotal;


  //clear the input withdraw field
  withdrawInput.value ='';
})