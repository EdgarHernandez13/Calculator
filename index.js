let number1 = null;
let number2 = null;
let operation =null;
let total = null;
let operationButtons = document.querySelectorAll(".operator")
let numberButtons = document.querySelectorAll(".number")
let screen = document.getElementById("screen")


numberButtons.forEach (number => {
    number.addEventListener("click",() =>{
        if(number1){
            number1 = number1 + number.innerText
        } else{
            number1 = number.innerText
        }
        console.log(number1)
        screen.innerText = number1
    })
})

operationButtons.forEach ((op) => {
    op.addEventListener("click", () => {
    if(op.id !== "equals"){
    screen.innerText = 0
    operation = op.id
    number2 = number1
    number1 = null
    } else{
        if(operation == "add"){
            screen.innerText = parseInt(number2) + parseInt(number1)
        }
        if(operation == "sub"){
            screen.innerText = parseInt(number2) - parseInt(number1)
        }
        if(operation == "mul"){
            screen.innerText = parseInt(number2) * parseInt(number1)
        }
        if(operation == "div"){
            screen.innerText = parseInt(number2) / parseInt(number1)
        }
        if(operation == "clear"){
            screen.innerText = 0
            number1= null
            number2= null
        }
        }
    })
})
