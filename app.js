const cards = document.querySelectorAll("article");

cards.forEach((card) => {
    const button = card.querySelector("button");
    const details = card.querySelector("div");
    button.addEventListener("click", () => {
        details.hidden = !details.hidden;
        button.textContent = details.hidden ? "Show recipe" : "Hide recipe";
        button.setAttribute("aria-expanded", !details.hidden);
    })
})