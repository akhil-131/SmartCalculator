const display = document.getElementById('display');
const statusText = document.getElementById('status');

// Append value to display
function appendToDisplay(value) {
    display.value += value;
    smartStatus();
}

// Clear all
function clearDisplay() {
    display.value = '';
    statusText.textContent = '';
}

// Delete one character
function deleteChar() {
    display.value = display.value.slice(0, -1);
    smartStatus();
}

// Smart evaluator with error handling
function calculate() {
    try {
        let result = eval(display.value.replace('÷', '/').replace('×', '*'));
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid");
        }
        display.value = result;
        statusText.textContent = "✅ Smart calculation successful!";
    } catch (error) {
        display.value = '';
        statusText.textContent = "⚠️ Invalid Expression";
    }
}

// Real-time “Smart” Status
function smartStatus() {
    if (display.value === '') {
        statusText.textContent = '';
        return;
    }
    try {
        eval(display.value);
        statusText.textContent = '🧠 Looks good!';
    } catch {
        statusText.textContent = '⚠️ Fix your expression...';
    }
}
