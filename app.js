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

// ..................//

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText
    
    const typedNumberField = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumberField.value
    // console.log(typeof(previousTypedNumber));
    
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = ''
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('') 
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumberField.value = remainingDigits
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number ;
        console.log(newTypedNumber);
        typedNumberField.value = newTypedNumber ;    
    }
})

// ...............//

// document.getElementById('verify-pin').addEventListener('click', function(){
//     const displayPinField = document.getElementById('display-pin')
//     const currentPin = displayPinField.value 

//     const typedNumberField = document.getElementById('typed-numbers')
//     const typeNumber = typedNumberField.value 

//     const pinSuccessMessage = document.getElementById('pin-success')
//     const pinFailurMessage = document.getElementById('pin-failure')
//     if(typeNumber === currentPin ){
//         pinSuccessMessage.style.display = 'block'
//         pinFailurMessage.style.display = 'none'
//     }
//     else{
//         pinFailurMessage.style.display = 'block'
//         pinSuccessMessage.style.display = 'none'
//     }

// })
