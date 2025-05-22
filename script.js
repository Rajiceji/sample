// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const button = document.getElementById('actionButton');
  const displayText = document.getElementById('displayText');

  // Add click event listener to the button
  button.addEventListener('click', function() {
    displayText.textContent = 'Button clicked! JavaScript is working.';
  });
});
