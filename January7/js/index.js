function validateNormalInput(input) {
  if (input.value === "") {
    input.parentNode.nextElementSibling.style.display = "block";
  }
}

function watchForm() {
  let form = document.getElementById("commentForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    let errorMessages = Array.from(
      document.getElementsByClassName("formError")
    );
    errorMessages.forEach(element => (element.style.display = "none"));
    const {
      firstName,
      lastName,
      email,
      phone,
      rating,
      comment,
      nextVisit
    } = event.target;
    validateNormalInput(firstName);
    validateNormalInput(lastName);
    validateNormalInput(email);
    validateNormalInput(phone);

    if (nextVisit.value === "") {
      document.getElementById("radioError").style.display = "block";
    }

    if (rating.value === "notSelected") {
      rating.nextElementSibling.style.display = "block";
    }

    if (comment.value === "") {
      comment.nextElementSibling.style.display = "block";
    }
  });
}

function hideAllSectionsExcept(id) {
  let sections = Array.from(document.getElementsByClassName("hideableSection"));
  sections.forEach(
    section => (section.style.display = section.id === id ? "block" : "none")
  );
}

function createHomeListener() {
  const button = document.getElementById("homeButton");
  button.addEventListener("click", event => {
    event.preventDefault();
    hideAllSectionsExcept("mainSection");
  });
}

function createReviewsListener() {
  const button = document.getElementById("reviewsButton");
  button.addEventListener("click", event => {
    event.preventDefault();
    hideAllSectionsExcept("reviewsSection");
  });
}

function createAboutListener() {
  const button = document.getElementById("aboutButton");
  button.addEventListener("click", event => {
    event.preventDefault();
    hideAllSectionsExcept("aboutSection");
  });
}

function init() {
  hideAllSectionsExcept("mainSection");
  watchForm();
  createHomeListener();
  createReviewsListener();
  createAboutListener();
}

init();
