const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

function generateRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex}`;
}

function generatePalette(count = 5) {
  palette.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const color = generateRandomColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;

    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      colorBox.textContent = 'Copied!';
      setTimeout(() => {
        colorBox.textContent = color;
      }, 1000);
    });

    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener('click', () => generatePalette());

generatePalette(); // Initial palette
