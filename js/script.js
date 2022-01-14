const activeState = document.querySelectorAll(".ulActive");

const rm = () => activeState.forEach((rm) => rm.classList.remove("active"));

const list = activeState.forEach((active) => {
    active.addEventListener("click", () => {
        rm();
        active.classList.add("active");
    });
});
