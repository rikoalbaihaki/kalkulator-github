function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Tidak bisa dibagi 0";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}
