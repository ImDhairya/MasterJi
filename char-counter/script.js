const input = document.getElementById("input-val");
const showPara = document.getElementById("characters");

input.addEventListener("input", () => {
  const text = input.value.trim();
  const length = text.length;

  const words = text.split(/\s+/).filter(Boolean);

  const uniqueWords = [...new Set(words.map((word) => word.toLowerCase()))];

  if (length > 200) {
    showPara.innerHTML = `The length has exceeded 200 characters.`;
  } else {
    showPara.innerHTML = `
    Characters: ${uniqueWords.length}
    `;
  }
});
