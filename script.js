document.addEventListener('DOMContentLoaded', function () {
    var email1 = document.getElementById('email');
    var email2 = document.getElementById('confirm');
    var confirmLabel = document.getElementById('confirmation');

    function compareEmails() {
        if (email2.value !== '') {
            if (email1.value !== email2.value) {
                confirmLabel.style.color = 'red';
                confirmLabel.style.display = 'block';
                confirmLabel.textContent = 'Email addresses do NOT match!';
                email2.style.borderWidth = '2px';
                email2.style.borderColor = 'red';
            } else {
                confirmLabel.style.color = 'green';
                confirmLabel.style.display = 'block';
                confirmLabel.textContent = 'Email addresses match!';
                email2.style.borderWidth = '2px';
                email2.style.borderColor = 'green';
            }
        }
    }

    email2.onchange = function () {compareEmails()};
});