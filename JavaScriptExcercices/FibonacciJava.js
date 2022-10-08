var memo = {1:1, 2:1};
function fibonacciFunction() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = x(n);
    document.getElementById("fibonacciLbl").textContent = val;
    console.log(memo);
}

function x(n) {

    var value;
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        value = x(n-1) + x(n-2)
        memo[n] = value;
    }

    return value;
}
