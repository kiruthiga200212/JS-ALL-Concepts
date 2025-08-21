const input = document.getElementById('text-value');
const display = document.getElementById('display');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

let savedText = '';

// Show live typing
input.addEventListener('input', () => {
    display.textContent = savedText + input.value;
});

// Save button: append new text to savedText
saveBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        savedText += input.value + '\n';
        display.textContent = savedText;
        input.value = ''; 
    }
});

// Cancel button: clear input only (keep savedText)
cancelBtn.addEventListener('click', () => {
    input.value = '';
    display.textContent = savedText; 
});