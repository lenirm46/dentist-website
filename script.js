document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    if(name && email && phone && message) {
        alert('Thank you for your message! We will contact you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});