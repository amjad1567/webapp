document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Phone number validation: exactly 10 digits
    const phone = document.getElementById("Phone").value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Email validation using regex
    const email = document.getElementById("Email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Password validation: at least 8 characters, one uppercase letter, one digit, one symbol
    const password = document.getElementById("Password").value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one symbol.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If all checks pass, form will submit
});