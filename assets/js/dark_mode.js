document.addEventListener('DOMContentLoaded', function () {
    const mode_toggle = document.getElementById("light-toggle");

    if (mode_toggle === null) {
        return;
    }

    mode_toggle.addEventListener("click", function () {
        toggleTheme(localStorage.getItem("theme"));
    });
});
