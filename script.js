const button = document.getElementById('actionButton');
const statusText = document.getElementById('statusText');

if (button && statusText) {
  button.addEventListener('click', () => {
    statusText.textContent = 'The button works and the page is ready.';
  });
}
