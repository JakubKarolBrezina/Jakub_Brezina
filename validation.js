document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Zabráni odoslaniu formulára

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Jednoduchý regex pre email

    if (!name.trim()) {
        alert('Prosím zadajte svoje meno.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Prosím zadajte platný email.');
        return;
    }

    if (!message.trim()) {
        alert('Prosím zadajte správu.');
        return;
    }

    // Ak všetko prejde, formulár sa "odosiela" (v tomto prípade len simulujeme)
    alert('Ďakujeme za vašu pripomienku!');
    // Tu by sa formulár reálne odoslal, napr. pomocou `this.submit();` alebo AJAX volania
});
