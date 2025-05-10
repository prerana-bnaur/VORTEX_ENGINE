// calci.js

let display = document.getElementById("disp");
let currentInput = "";

// Get all input buttons
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        switch (value) {
            case "AC":
                currentInput = "";
                updateDisplay("0");
                break;

            case "CE":
                currentInput = currentInput.slice(0, -1);
                updateDisplay(currentInput || "0");
                break;

            case "=":
                try {
                    currentInput = eval(currentInput.replace("÷", "/").replace("√", "Math.sqrt"));
                    updateDisplay(currentInput);
                } catch {
                    updateDisplay("Error");
                }
                break;

            case "+/_":
                if (currentInput) {
                    currentInput = String(-1 * parseFloat(currentInput));
                    updateDisplay(currentInput);
                }
                break;

            case "√":
                try {
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    updateDisplay(currentInput);
                } catch {
                    updateDisplay("Error");
                }
                break;

            case "%":
                try {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    updateDisplay(currentInput);
                } catch {
                    updateDisplay("Error");
                }
                break;

            case "ON":
                currentInput = "";
                updateDisplay("0");
                break;

            case "OFF":
                currentInput = "";
                updateDisplay("");
                break;

            default:
                currentInput += value;
                updateDisplay(currentInput);
        }
    });
});

function updateDisplay(value) {
    display.textContent = value;
}

