window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Contact form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Fetch form fields
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Validate form fields (you can add more validation as needed)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert("Please fill out all fields");
            return;
        }

        // Form data is valid, you can proceed with submitting the form
        // For now, let's log the form data to the console
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // Show a pop-up saying "Message recorded"
        alert("Message recorded");

        // Reset the form fields
        document.getElementById("contactForm").reset();
    });

});
