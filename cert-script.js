let badgeIndex = 0;
let certIndex = 0;
const badges = document.querySelectorAll('.badge-slide');
const certifications = document.querySelectorAll('.cert-slide');

document.addEventListener('DOMContentLoaded', function() {
    showBadge(badgeIndex);
    showCertification(certIndex);
});

function showBadge(n) {
    badges.forEach((badge, index) => {
        badge.classList.remove('active');
        if (index === n) {
            badge.classList.add('active');
        }
    });
}

function showCertification(n) {
    certifications.forEach((cert, index) => {
        cert.classList.remove('active');
        if (index === n) {
            cert.classList.add('active');
        }
    });
}

// Affichage initial de l'article
showBadge(badgeIndex);
showCertification(certIndex);

function prev () {
    badgeIndex = (badgeIndex - 1 + badges.length) % badges.length;
    showBadge(badgeIndex);
}


function next () {
    badgeIndex = (badgeIndex + 1) % badges.length;
    showBadge(badgeIndex);
}

function prevCert () {
    certIndex = (certIndex - 1 + certifications.length) % certifications.length;
    showCertification(certIndex);
}

function nextCert () {
    certIndex = (certIndex + 1) % certifications.length;
    showCertification(certIndex);
}

// Ajout des événements aux boutons
document.getElementById('next').onclick = next;
document.getElementById('prev').onclick = prev;
document.getElementById('next-cert').onclick = nextCert;
document.getElementById('prev-cert').onclick = prevCert;

// Défilement automatique toutes les 15 secondes
setInterval(next, 2000);
setInterval(nextCert, 5000);


// Écouter l'événement de soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi normal du formulaire

            // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Stocker les données dans localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

            // Rediriger vers la page de remerciement
    window.location.href = 'thankyou.html';
});