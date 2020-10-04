function getAnswer(){
    const numOne = Number(document.getElementById("numOne").value)
    const numTwo = Number(document.getElementById("numTwo").value)
    const answer = document.getElementById("answer")
    const operation = document.getElementById("operation").value
    
    answer.innerHTML = calculate(numOne, numTwo, operation)
}

function calculate(numOne, numTwo, operation) {
    switch(operation) {
        case "+":
            return numOne + numTwo
        case "-":
            return numOne - numTwo
        case "*":
            return numOne * numTwo
        case "/":
            return numOne / numTwo
        default:
            return "error"
        
    }
}