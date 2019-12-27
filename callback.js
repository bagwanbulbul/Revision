function numberCalculate(num1, num2, callback) {
    return callback(num1, num2);
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

var output = (numberCalculate(5, 15, multiplyNumbers));
console.log(output)