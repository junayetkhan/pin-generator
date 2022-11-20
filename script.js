function getpin() {
    const GeneretePin = generetepin();
    const pin = GeneretePin + '';
    if (pin.length === 4) {
        return GeneretePin;
    } else {
        return getpin();
    }
}
function generetepin() {
    const randomNum = Math.round(Math.random()*10000);
    return randomNum;
}
function GetInputValue(elementid) {
    const getInputValue = document.getElementById(elementid);
    const currentValue = getInputValue.value;
    return currentValue;
    
}
document.getElementById('Generate-Pin').addEventListener("click",function(){
    const GetPin = getpin();
    const GenereteField = document.getElementById('generete-input');
    GenereteField.value = GetPin;
})
document.getElementById('calculator-body').addEventListener("click",function(event){
    const number = event.target.innerText;
    const getInputField = document.getElementById('calculator-input');
    const currentFieldNumber = getInputField.value;
    if (isNaN(number)){
       if(number === 'C'){
        getInputField.value = '';
       } else if(number === '<') {
        const getNumbers = currentFieldNumber.split('');
        getNumbers.pop();
        const newDigit = getNumbers.join('');
        getInputField.value = newDigit;
       }
    } 
    else{
        const newFieldnumber = currentFieldNumber + number;
        getInputField.value = newFieldnumber;
        // console.log(newFieldnumber);
    }
})

document.getElementById('submit-btn').addEventListener("click",function(){
    const generetePinValue = GetInputValue("generete-input");
    const typeValue = GetInputValue("calculator-input");
    const failureField = document.getElementById('failure');
    const succsessField = document.getElementById('succsess');

    if (typeValue === generetePinValue) {
        failureField.style.display = 'none';
        succsessField.style.display = 'block';
    } else {
        failureField.style.display= 'block';
        succsessField.style.display = 'none';
    }
})
