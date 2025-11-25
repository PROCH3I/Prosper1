// Select the form
document.querySelector(".contact_info").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Collect form values
    let fullname = event.target.elements["fullname"].value.trim();
    let phone = event.target.elements["phone"].value.trim();
    let email = event.target.elements["email"].value.trim();
    let message = event.target.elements["message"].value.trim();

    // Validation
    if (!fullname || !phone || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Optional: validate phone number (simple)
    if (!/^\d{7,15}$/.test(phone)) {
        alert("Please enter a valid phone number (7-15 digits).");
        return;
    }

    // Optional: validate email (simple)
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is valid
    alert("Message successfully sent!");
});