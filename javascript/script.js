const popupBtn = document.querySelector ("#popupBtn")
      popup = document.querySelector ("#popup")
      cancel = document.querySelector ("#cancel")
      black = document.querySelector ("#black")

popupBtn.onclick = () => {
    popup.style.display = "block"
    black.style.display = "block"
}

cancel.onclick = () => {
    black.style.display = "none"
    popup.style.display = "none"
}