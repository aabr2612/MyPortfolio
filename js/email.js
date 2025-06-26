// initialize EmailJS with your public key
(function () {
    emailjs.init("UrgQCZc2audte_YFx");
})();

// form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent default form submission (page reload)

    // send form data via EmailJS
    emailjs.sendForm('service_3ow6o9kk', 'template_x0586h99', this)
        .then(function () {
            // show success notification and reset the form
            showNotification("Message sent successfully!");
            document.getElementById('contact-form').reset();
        }, function (error) {
            // show failure notification
            showNotification("Failed to send message.");
        });
});

// custom toast-style notification handler
function showNotification(message) {
    const notification = document.getElementById('notification');

    // set message text
    notification.textContent = message;

    // make it visible
    notification.style.display = 'block';

    // restart animation (for repeated triggers)
    notification.style.animation = 'none';
    void notification.offsetWidth; // trigger reflow
    notification.style.animation = 'fadeInOut 3s forwards';

    // hide after animation ends
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
