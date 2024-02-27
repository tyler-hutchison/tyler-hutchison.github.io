const header = document.querySelector("header");

document.addEventListener("scroll", () => {
    header.classList.add("scrolled");

    if (window.pageYOffset === 0 && header.classList.contains("scrolled")) {
        header.classList.remove("scrolled");
    }
});