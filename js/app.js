// Toggle the light mode and dark mode
const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        html.setAttribute("data-bs-theme", "light");
    } else {
        html.setAttribute("data-bs-theme", "dark");
    }
});