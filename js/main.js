const boutonMenu = document.querySelector("#bouton-menu");
const menuPrincipal = document.querySelector("#menu-principal");

if (boutonMenu && menuPrincipal) {
    boutonMenu.addEventListener("click", () => {
        const menuOuvert = menuPrincipal.classList.toggle("ouvert");

        boutonMenu.setAttribute("aria-expended", String(menuOuvert));
        boutonMenu.textContent = menuOuvert ? "Fermer le menu" : "Menu";
    });

    boutonMenu.classList.add("pret");
}

if (document.querySelector("#fond-introduction") && window.Color4Bg?.AestheticFluidBg) {
    new window.Color4Bg.AestheticFluidBg({
        dom: "fond-introduction",
        colors: ["#282828", "#FF5FC2", "#00FF0B", "#282828", "#282828", "#282828"],
        loop: !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
}

const boutonsFiltres = document.querySelectorAll("#filtres-projets button");
const projets = document.querySelectorAll("article[data-categorie]");

boutonsFiltres.forEach((bouton) =>{
    bouton.addEventListener("click", () => {
        const filtre = bouton.dataset.filtre;

        projets.forEach((projet) => {
            const afficher = filtre === "tous" || projet.dataset.categorie === filtre;
            projet.hidden = !afficher;
        });

        boutonsFiltres.forEach((autreBouton) => {
            autreBouton.setAttribute("aria-pressed", String(autreBouton === bouton));
        });
    });
});

const formulaireContact = document.querySelector("#formulaire-contact");
const retourContact = document.querySelector("#retour-contact");

if (formulaireContact && retourContact) {
    formulaireContact.addEventListener("input", () => {
        retourContact.textContent = "";
    });

    formulaireContact.addEventListener("invalid", () => {
        retourContact.textContent = "Vérifiez le champ indiqué.";
    }, true);

    formulaireContact.addEventListener("submit", (event) => {
        event.preventDefault();
        retourContact.textContent = "Message envoyé.";
    });
}