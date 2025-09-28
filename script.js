
// Display element select kar rahe hain
let display = document.getElementById("display");


// Function jo number/operator ko display me add karega
function appendValue(value) {
  display.value += value;    // Append the clicked value to the display
}


// Function jo display ko clear karega
function clearDisplay() {
  display.value = "";      // Clear display
}

// Function jo final expression calculate karega
function calculate() {
  try {
    display.value = eval(display.value);  // Evaluate expression
  } catch {
    display.value = "Error";    // Agar galat input ho to Error show kare
  }
}


