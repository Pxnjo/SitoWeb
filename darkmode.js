let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme_switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    document.querySelectorAll('.curriculum').forEach(curriculum => curriculum.classList.add("darkmode"))
    document.querySelectorAll('.curriculum_profile').forEach(curriculum => curriculum.classList.add("darkmode"))
    document.querySelectorAll('.contacts').forEach(curriculum => curriculum.classList.add("darkmode"))
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    document.querySelectorAll('.curriculum').forEach(curriculum => curriculum.classList.remove("darkmode"))
    document.querySelectorAll('.curriculum_profile').forEach(curriculum => curriculum.classList.remove("darkmode"))
    document.querySelectorAll('.contacts').forEach(curriculum => curriculum.classList.remove("darkmode"))
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})