const buttonsOn = document.querySelectorAll(".contatar")
const modal = document.querySelector('#modal')
const buttonOff = document.querySelector('#modal .header a')

for (const buttonOn of buttonsOn) {
    buttonOn.addEventListener("click", () => {
        modal.classList.remove("hide")
    })
}


buttonOff.addEventListener("click", () => {
    modal.classList.add("hide")
})