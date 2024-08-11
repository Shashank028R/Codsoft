let answer = document.querySelector(".answer");
let a = "", b = "", op = "";
let isFirstNum = true;
let calculationDone = false;

function num(input) {
    if (isFirstNum) {
        if (calculationDone) {
            clearAll();
            calculationDone = false;
        }
        a += input;
        updateAnswerDisplay(a);
    } else {
        b += input;
        updateAnswerDisplay(a + " " + op + " " + b);
    }
}

function operator(c) {
    if (a !== "" && op === "") {
        op = c;
        updateAnswerDisplay(a + " " + op);
        isFirstNum = false;
    } 
    else if (a !== "" && op !== "" && b === "") {
        op = c;
        updateAnswerDisplay(a + " " + op);
        isFirstNum = false;
    } 
    else if (a !== "" && b !== "") {
        calculate();
        op = c;
        updateAnswerDisplay(a + " " + op);
        isFirstNum = false;
    }
}

function backspace() {
    if (!isFirstNum && b !== "") {
        b = b.slice(0, -1);
        updateAnswerDisplay(a + " " + op + " " + b);
    } else if (!isFirstNum && op !== "") {
        op = "";
        updateAnswerDisplay(a);
        isFirstNum = true;
    } else if (isFirstNum && a !== "") {
        a = a.slice(0, -1);
        updateAnswerDisplay(a);
        if (a === "") {
            updateAnswerDisplay("0");
        }
    }
}

function clearAll() {
    a = "";
    b = "";
    op = "";
    isFirstNum = true;
    updateAnswerDisplay("0");
}

function calculate() {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let result;

    switch(op){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "^":
            result = num1 ** num2;
            break;
        default:
            result = "Invalid input.";  
            break;                               
    }
    
    updateAnswerDisplay(result.toString());
    a = result.toString();
    b = "";
    isFirstNum = true;
    calculationDone = true;
}

function updateAnswerDisplay(content) {
    if (content.length > 17) {
        answer.innerHTML = "Overflow";
    } else {
        answer.innerHTML = content;
    }
}
