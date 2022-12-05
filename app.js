function getPin(){
    const pin = genaratePin()
    const pinString = pin + ''
    if(pinString.length === 4){
        return pin
    }
    else{
        return getPin()
    }
}

function genaratePin(){
    const random = Math.round(Math.random() * 10000)
    return random 

}
document.getElementById('genarate-pin').addEventListener('click', function(){
    const pin = getPin()
    // display pin
    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin
})