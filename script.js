const mainMenuBtn = document.getElementById("mainMenuBtn");
const mainDropdown = document.getElementById("mainDropdown");

const roadmapMenuBtn = document.getElementById("roadmapMenuBtn");
const roadmapDropdown = document.getElementById("roadmapDropdown");

const aiTutorMenuBtn = document.getElementById("aiTutorMenuBtn");
const aiTutorDropdown = document.getElementById("aiTutorDropdown");

function closeAllDropdowns() {
    mainDropdown.classList.remove("show");
    roadmapDropdown.classList.remove("show");
    aiTutorDropdown.classList.remove("show");
}

mainMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const isOpen = mainDropdown.classList.contains("show");
    closeAllDropdowns();

    if (!isOpen) {
        mainDropdown.classList.add("show");
    }
});

roadmapMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const isOpen = roadmapDropdown.classList.contains("show");
    closeAllDropdowns();

    if (!isOpen) {
        roadmapDropdown.classList.add("show");
    }
});

aiTutorMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const isOpen = aiTutorDropdown.classList.contains("show");
    closeAllDropdowns();

    if (!isOpen) {
        aiTutorDropdown.classList.add("show");
    }
});

document.addEventListener("click", closeAllDropdowns);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeAllDropdowns();
    }
});
