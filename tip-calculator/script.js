let billAmount = document.getElementById("bill-amount");
let percentageTip = document.getElementById("tip-precentage");
let totalPeople = document.getElementById("totol-people");
function calculateTip() {
  const amount = parseFloat(billAmount.value);
  const percentage = parseFloat(percentageTip.value);
  const pople = parseInt(totalPeople.value);
  checkingNumberInput(amount, percentage, pople);
  getAmount(amount, percentage, pople);
}

function checkingNumberInput(amount, percentage, pople) {
  if (!amount || !percentage || !pople) {
    return alert("Please enter all values");
  }

  console.log(!Number.isNaN(totalPeople.value));
  if (
    Number.isNaN(billAmount.value) ||
    Number.isNaN(percentageTip.value) ||
    Number.isNaN(totalPeople.value)
  ) {
    return alert("Please enter only valid numbers");
  }
}

function getAmount(amount, percentage, pople) {
  const totalTip = (amount * percentage) / 100;
  const tipPerPerson = totalTip / pople;
  const totalPerPerson = amount + totalTip / pople;
  const result = document.getElementById("result");
  result.innerHTML = `The total tip is ${totalTip
    .toFixed(2)
    .padEnd(2, "0")}, Tip per person is ${tipPerPerson
    .toFixed(2)
    .padEnd(2, "0")}, and totol per person is ${totalPerPerson
    .toFixed(2)
    .padEnd(2, "0")}`;
}
