function getpin() {
    const GeneretePin = generetepin();
    const pin = GeneretePin+ '';
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
