

// Function to send the email
function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email via EmailJS
    emailjs.send("service_h3tonx8", "template_apmwlxj", templateParams)
        .then(
            function(response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // Reset the form
            },
            function(error) {
                alert("Failed to send message: " + JSON.stringify(error));
            }
        );
}

