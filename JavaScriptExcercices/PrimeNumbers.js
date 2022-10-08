

var getPrimeFactors = function (n) {
    "use strict";

  
    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i, sequence = [];

    while (n % 2 == 0) {
        System.out.print(2 + " ");
        n /= 2;
    }


    for (i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i == 0) {
            System.out.print(i + " ");
            n /= i;
        }
    }

    if (n > 2)
        System.out.print(n);


    return sequence;
};
