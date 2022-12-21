function startModal(classModal) {
  const modal = document.getElementById(classModal);
  modal.classList.add("display");
  modal.addEventListener("click", function (e) {
    if (
      e.target.id == classModal ||
      e.target.className == "modal__close" ||
      e.target.className == "modal__button"
    ) {
      modal.classList.remove("display");
    }
  });
}

const button = document.querySelector(".profile__edit");
button.addEventListener("click", function () {
  startModal("modalStart");
});

let formElement = document.querySelector(".modal__formula");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#job");
  let title = document.querySelector(".profile__title");
  let text = document.querySelector(".profile__text");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  title.textContent = nameValue;
  text.textContent = jobValue;
}
formElement.addEventListener("submit", handleProfileFormSubmit);
