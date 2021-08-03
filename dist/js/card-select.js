(function (page, cardsList, modalWindow, button) {

  let cardsTotal = cardsList.length;
  for (let i = 0; i < cardsTotal; i++) {
    cardsList[i].addEventListener("click", handleCardClick)
  }

  function handleCardClick() {
    for (let i = 0; i < cardsTotal; i++) {
      cardsList[i].classList.remove("card_selected")
    }
    this.classList.add("card_selected");
  }

  modalWindow.addEventListener("click", function () {
    this.classList.remove("modal_show");
    page.classList.remove("page_diffuse");
  })

  button.addEventListener("click", function () {
    modalWindow.classList.add("modal_show")
    page.classList.add("page_diffuse");
  })


})
(document.querySelector('.page') || console.log("No modals found..."),
document.querySelectorAll('.card') || console.log("No valid cards found..."),
document.querySelector('.modal') || console.log("No modals found..."),
  document.querySelector('[data-toggle="modal"]') || console.log("No modals found...")
)
;