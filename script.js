document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let ime = document.getElementById('ime').value;
    let prezime = document.getElementById('prezime').value;
    let adresa = document.getElementById('adresa').value;
    let grad = document.getElementById('grad').value;
    let telefon = document.getElementById('telefon').value;
    let email = document.getElementById('email').value;

    if (!ime || !prezime || !adresa || !grad || !telefon || !email) {
        alert('Molimo da popuniš sva polja.');
        return;
    }

    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert('Molimo unesi validnu email adresu.');
        return;
    }

    let phonePattern = /^\d+$/;
    if (!phonePattern.test(telefon)) {
        alert('Molimo u polje za broj unesi broj telefona.');
        return;
    }

    let data = {
        ime: ime,
        prezime: prezime,
        adresa: adresa,
        grad: grad,
        telefon: telefon,
        email: email,
       
    };

    localStorage.setItem('orderData', JSON.stringify(data));

    alert('Uspešno ste poručili proizvod!');
});


let currentIndex = 0;

function rotateTestimonials() {
    let testimonials = document.querySelectorAll('.testimonial');
    if(currentIndex > testimonials.length - 1) {
        currentIndex = 0; 
    }

    for(let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    currentIndex++;
}

setInterval(rotateTestimonials, 3000);


