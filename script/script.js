function startModal(classModal) {
  const modal = document.querySelector("#modalStart");
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

const formElement = document.querySelector(".modal__formula");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#job");
  const title = document.querySelector(".profile__title");
  const text = document.querySelector(".profile__text");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  title.textContent = nameValue;
  text.textContent = jobValue;
}
formElement.addEventListener("submit", handleProfileFormSubmit);
