function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 5){
        return pin;
    }else{
        return getPin();
    }

}
function generatePin() {
    const random = Math.round(Math.random()*100000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
   const pin = getPin();
   const displayField = document.getElementById('display-pin');
   displayField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberFiels = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberFiels.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberFiels.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberFiels.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberFiels.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typedNumber == currentPin){
       
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
       
    }
})