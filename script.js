let num1, num2;
let op = "";
let display = "";

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operator(a, b, op) {
    if (op == "+") {
        return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "*") {
        return multiply(a, b);
    } else if (op == "/") {
        return divide(a, b);
    }
}

function isOperator(a) {
    return (a == "+" || a == "x" || a == "-" || a == "/" || a == "%");
}

const screen = document.querySelector(".display");
function updateDisplay() {
    screen.textContent = display;
}
function addNum(num) {
    display += num;
    updateDisplay();
}

const numbers = document.querySelectorAll(".num");
numbers.forEach((item) => {
    item.addEventListener("click", (e) => {
        addNum(item.textContent);
    });
})

const clearBtn = document.querySelector(".cbtn");
clearBtn.addEventListener("click", (e) => {
    display =  "";
    updateDisplay();
})

const operators = document.querySelectorAll(".oper");
operators.forEach((item) => {
    item.addEventListener("click", (e) => {
        num1 = parseFloat(display);
        display += e.target.textContent;
        op = e.target.textContent;
        updateDisplay();
        console.log(e.target.textContent);
    });
})

const equal = document.querySelector(".equals");
equal.addEventListener("click", (e) => {
    let lis = display.split("");
    let operatorsList = lis.filter((c) => isOperator(c));
    let numbersList = display.split(/[/x+%-]/);
    console.log(operatorsList , numbersList);
    console.log(compute(numbersList, operatorsList));
})



