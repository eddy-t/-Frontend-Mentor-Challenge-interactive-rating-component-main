const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");
const alertRating = document.getElementById("alert-rating");


submitButton.addEventListener("click", () => {
  if (actualRating.innerHTML !== '') {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
  }
  alertRating.style.display = "block";
});

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
