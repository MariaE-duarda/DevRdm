((d) => { 
    // DOM Elements
    let one = d.getElementById("number-one");
    let two = d.getElementById("number-two");
    let three = d.getElementById("number-three");
    let four = d.getElementById("number-four");
    let five = d.getElementById("number-five");
    let six = d.getElementById("number-six");
    let seven = d.getElementById("number-seven");
    let eight = d.getElementById("number-eight");
    let nine = d.getElementById("number-nine");
    let zero = d.getElementById("number-zero");
    let clear = d.getElementById("clear-button");
    let minus = d.getElementById("minus-operator");
    let plus = d.getElementById("plus-operator");
    let equal = d.getElementById("equal-operator");
    let divide = d.getElementById("divide-operator");
    let multiple = d.getElementById("multiple-operator");
    let result = d.getElementById("number-result");
    let calculation = [];
    let temp = [];
    let finalResult = [];
    let scree = d.getElementById("scree");

  
    // Clear button
    clear.addEventListener("click", function () { 
        calculation = [];
        finalResult = [];
        temp = [];
        result.textContent = 0;
        scree.textContent = 0;  
    })

    // Add numbers and display on the screen
    zero.addEventListener("click", function () { 
        calculation += 0;
        result.textContent = calculation;
    })

    one.addEventListener("click", function () { 
        calculation += 1;
        result.textContent = calculation;
    })

    two.addEventListener("click", function () { 
        calculation += 2;
        result.textContent = calculation;
    })

    three.addEventListener("click", function () { 
        calculation += 3;
        result.textContent = calculation;
    })

    four.addEventListener("click", function () { 
        calculation += 4;
        result.textContent = calculation;   
    })

    five.addEventListener("click", function () { 
        calculation += 5;
        result.textContent = calculation; 
    })

    six.addEventListener("click", function () { 
        calculation += 6;
        result.textContent = calculation;
    })

    seven.addEventListener("click", function () { 
        calculation += 7;
        result.textContent = calculation;
    })

    eight.addEventListener("click", function () { 
        calculation += 8;
        result.textContent = calculation;
    })

    nine.addEventListener("click", function () { 
        calculation += 9;
        result.textContent = calculation;
    })

    // Push the numbers to the temp array
    plus.addEventListener("click", function () {
        temp.push(calculation);
        calculation = [];
        scree.textContent = +temp[0] + "+";          
    })

    minus.addEventListener("click", function () {
        temp.push(calculation);
        calculation = [];
        scree.textContent = +temp[0] + "-"; 
    })

    multiple.addEventListener("click", function () { 
        temp.push(calculation);
        calculation = [];
        scree.textContent = +temp[0] + "*";
    })

    divide.addEventListener("click", function () {
        temp.push(calculation);
        calculation = [];
        scree.textContent = +temp[0] + "/";
    })

    // Do the calculation
    equal.addEventListener("click", function () { 

        switch (scree.textContent) {
            case +temp[0] + "+":
                finalResult = +temp[0] + (+calculation);
                scree.textContent = +temp[0] + "+" + (+calculation)+"=";
                break;
            case +temp[0] + "-":
                finalResult = +temp[0] - (+calculation);
                scree.textContent = +temp[0] + "-" + (+calculation)+"=";
                break;
            case +temp[0] + "*":
                finalResult = +temp[0] * (+calculation);
                scree.textContent = +temp[0] + "*" + (+calculation)+"=";
                break;
            case +temp[0] + "/":
                finalResult = +temp[0] / (+calculation);
                scree.textContent = +temp[0] + "/" + (+calculation)+"=";
                break;
            default: return; 
        }

        // Display the result //
        if (+finalResult > 999999999999) {
            alert("This calculator is able to calculate up to 12 digits. Please click on the clear button to start a new calculation.");
        } else {
            result.textContent = finalResult;
            temp = [];
            temp.push(finalResult);
        }
    })  

})(document);
