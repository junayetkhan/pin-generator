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