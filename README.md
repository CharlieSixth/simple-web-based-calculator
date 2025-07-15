# simple-web-based-calculator
*Academic project for "Introduction to Web Applications" course*


A clean, responsive web calculator built with vanilla HTML, CSS, and JavaScript that performs basic mathematical operations.

## ✨ Features

### 🧮 Core Functionality
- Basic arithmetic operations: 
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
- Instant calculation on button click
- Dynamic result display

### 🛡️ Validation & Error Handling
- Input validation for empty fields
- Number format checking
- Division by zero protection
- Clear error messages

### 🎨 UI/UX Design
- Clean, minimalist interface
- Responsive layout
- Interactive button hover effects
- Proper input fields with placeholders
- Visually distinct operator selection

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and elements |
| CSS3 | Styling and visual presentation |
| JavaScript | Calculation logic and interactivity |

## 🔍 Code Highlights

```javascript
// Input validation example
if (num1 === "" || num2 === "") {
    document.getElementById('result').innerText = "Please enter both numbers!";
    return;
}

// Operation handling
switch (operator) {
    case 'add':
        result = number1 + number2;
        break;
    case 'subtract':
        result = number1 - number2;
        break;
    // ... other operations
}
