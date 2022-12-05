function getPin(){
    const pin = genaratePin()
    const pinString = pin + ''
    if(pinString.length === 4){
        return pin
    }
    else{
        return getPin
    }
}


function genaratePin(){
    const random = Math.round(Math.random() * 10000)
    return random
}
document.getElementById('genarate-pin').addEventListener('click', function(){
    const pin = getPin()
    const displayPinPinField = document.getElementById('display-pin')
    displayPinPinField.value = pin
})