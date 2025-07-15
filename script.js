console.log("Witaj, Świecie!, To jest pierwsze powitanie w WWW.");

function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;

    if (num1 === "" || num2 === "") {
        document.getElementById('result').innerText = "Wprowadź obie liczby!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = "Wprowadź poprawne liczby!";
        return;
    }

    let result;

    switch (operator) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                result = "Nie można dzielić przez zero!";
            } else {
                result = number1 / number2;
            }
            break;
        default:
            result = "Nieznane działanie";
    }

    document.getElementById('result').innerText = "Wynik: " + result;
}