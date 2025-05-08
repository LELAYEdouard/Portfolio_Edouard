// Fonction pour afficher un projet et mettre à jour la classe active du lien
function afficherProjet(id) {
    // Masquer tous les projets
    const projets = document.querySelectorAll('.projet');
    projets.forEach(p => p.style.display = 'none');

    // Afficher le projet correspondant à l'ID
    const projet = document.getElementById(id);
    if (projet) {
        projet.style.display = 'block';
    }

    // Mettre à jour les liens du menu (ajouter la classe 'active' au lien cliqué)
    const links = document.querySelectorAll("aside a");
    links.forEach(link => link.classList.remove("active"));
    
    const activeLink = document.querySelector(`aside a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

// Fonction pour détecter le hash dans l'URL et afficher le projet correspondant
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("aside a");

    // Appliquer la classe active en fonction du hash de l'URL
    const currentHash = window.location.hash || "#SNAKE"; // défaut à #SNAKE
    links.forEach(link => {
        if (link.getAttribute("href") === currentHash) {
            link.classList.add("active");
        }

        // Écouteur pour le clic
        link.addEventListener("click", (event) => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Empêche le comportement par défaut du lien (pour éviter de changer l'URL)
            event.preventDefault();
            
            // Afficher le projet correspondant
            const id = link.getAttribute('href').substring(1); // Récupérer l'ID du projet
            afficherProjet(id);
        });
    });

    // Afficher le projet correspondant au hash dans l'URL, ou afficher "SNAKE" par défaut
    const initialHash = window.location.hash.substring(1) || 'SNAKE';
    afficherProjet(initialHash);
});

// Optionnel : Lors du chargement de la page, afficher le projet "SNAKE" par défaut
window.onload = function() {
    afficherProjet('SNAKE'); // Affiche "SNAKE" par défaut
};
