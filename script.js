// script.js
document.getElementById('taxForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Reset error icons
  document.querySelectorAll('.error-icon').forEach(function(icon) {
    icon.style.display = 'none';
  });
  
  const age = document.getElementById('age').value;
  const income = parseFloat(document.getElementById('income').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const deductions = parseFloat(document.getElementById('deductions').value) || 0;
  
  // Check for empty age field
  if (!age) {
    document.getElementById('ageError').style.display = 'inline';
    return;
  }
  
  // Check for invalid income values
  if (isNaN(income)) {
    document.getElementById('incomeError').style.display = 'inline';
    return;
  }
  
  // Calculate total income after deductions
  const totalIncome = income + extraIncome - deductions;
  
  // Calculate tax
  let tax = 0;
  if (totalIncome > 8) {
    if (age === '<40') {
      tax = 0.3 * (totalIncome - 8);
    } else if (age === '>=40&<60') {
      tax = 0.4 * (totalIncome - 8);
    } else {
      tax = 0.1 * (totalIncome - 8);
    }
  }
  
  // Display result in modal
  const modal = document.getElementById('modal');
  const availableIncome = document.getElementById('Income');
  const resultElement = document.getElementById('result');
  availableIncome.textContent = `${totalIncome - tax.toFixed(2)} Lakhs`;
  resultElement.textContent = `Tax to be paid: ${tax.toFixed(2)} Lakhs`;
  modal.style.display = 'block';
  
  // Close modal when user clicks outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});

// Close modal when close button is clicked
document.getElementsByClassName('close')[0].onclick = function() {
  document.getElementById('modal').style.display = 'none';
};

const aicon = document.querySelector(".icon1");
const amessage = document.querySelector(".Massage1");

let isVisibleA = false;

aicon.addEventListener('click', () => {
  if (!isVisibleA) {
    amessage.style.display = 'block';
    isVisibleA = true;
  } else {
    amessage.style.display = 'none';
    isVisibleA = false;
  }
});

const bicon = document.querySelector(".icon2");
const bmessage = document.querySelector(".Massage2");

let isVisibleB = false;

bicon.addEventListener('click', () => {
  if (!isVisibleB) {
    // Hide previous message
    if (isVisibleA) {
      amessage.style.display = 'none';
      isVisibleA = false;
    }
    bmessage.style.display = 'block';
    isVisibleB = true;
  } else {
    bmessage.style.display = 'none';
    isVisibleB = false;
  }
});

const cicon = document.querySelector(".icon3");
const cmessage = document.querySelector(".Massage3");

let isVisibleC = false;

cicon.addEventListener('click', () => {
  if (!isVisibleC) {
    // Hide previous message
    if (isVisibleB) {
      bmessage.style.display = 'none';
      isVisibleB = false;
    }
    cmessage.style.display = 'block';
    isVisibleC = true;
  } else {
    cmessage.style.display = 'none';
    isVisibleC = false;
  }
});

const dicon = document.querySelector(".icon4");
const dmessage = document.querySelector(".Massage4");

let isVisibleD = false;

dicon.addEventListener('click', () => {
  if (!isVisibleD) {
    // Hide previous message
    if (isVisibleC) {
      cmessage.style.display = 'none';
      isVisibleC = false;
    }
    dmessage.style.display = 'block';
    isVisibleD = true;
  } else {
    dmessage.style.display = 'none';
    isVisibleD = false;
  }
});