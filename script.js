let input = document.getElementById('input');

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  let result = eval(input.value);
  input.value = result;
}
