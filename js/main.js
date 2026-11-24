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