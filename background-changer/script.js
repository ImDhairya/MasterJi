function changeBackground() {
  const newColor = generateNewColor();
  document.body.style.backgroundColor = newColor;
}

function generateNewColor() {
  const hexChars = "0123456789ABCDEF";
  let value = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    value += hexChars[randomIndex];
  }
  return value;
}
