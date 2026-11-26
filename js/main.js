if (document.querySelector("#fond-introduction") && window.Color4Bg?.AestheticFluidBg) {
    new window.Color4Bg.AestheticFluidBg({
        dom: "fond-introduction",
        colors: ["#282828", "#FF5FC2", "#00FF0B", "#282828", "#282828", "#282828"],
        loop: !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
}

const boutonsFiltres = document.querySelectorAll("#filtres-projets button");
const projets = document.querySelectorAll("article[data-categories]");

boutonsFiltres.forEach((bouton) =>{
    bouton.addEventListener("click", () => {
        const filtre = bouton.dataset.filtre;

        projets.forEach((projet) => {
            const afficher = filtre === "tous" || projet.dataset.categories.split(/\s+/).includes(filtre);
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