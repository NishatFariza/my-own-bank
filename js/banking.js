//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('This is deposit button');
    
    //get the amount deposited
    const depositInput =document.getElementById('deposit-input');
     
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal =document.getElementById('deposit-total');
    depositTotal.innerText =depositAmount;

    //clear the input deposit field
    depositInput.value ="";
})