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

const screen = document.querySelector(".display");
function updateDisplay() {
    screen.textContent = display;
}
function addNum(num) {
    display += num;
    updateDisplay();
}

const numbers = document.querySelectorAll(".num");
console.log(numbers);
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
