let num1, num2;
let op = "";
let display = "";

function add(a, b) {
    return a + b;
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
    a = parseFloat(a);
    b = parseFloat(b);
    if (op == "+") {
        return add(a, b);
    } else if (op == "-") {
        return subtract(a, b);
    } else if (op == "x") {
        return multiply(a, b);
    } else if (op == "/") {
        return divide(a, b);
    }
}

function compute(nList, oList) {
    //oList.sort( (a, b) => (operatorPriority[b] - operatorPriority[a]));
    let result = 0;
    let operList = ["x", "/", "-", "+"];
    while (oList.length != 0) {
        operList.forEach((o) => {
            let loc = oList.findIndex((op) => op == o);
            if (loc != -1) {
                
                result = operator(nList[loc], nList[loc + 1], o);
                nList.splice(loc, 2, result);
                oList.splice(loc, 1, );
            }
        })
    }
    display = result;
    updateDisplay();
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
    });
})

const equal = document.querySelector(".equals");
equal.addEventListener("click", (e) => {
    let lis = display.split("");
    let operatorsList = lis.filter((c) => isOperator(c));
    let numbersList = display.split(/[/x+%-]/);
    console.log(numbersList);
    (compute(numbersList, operatorsList));
})



