document.addEventListener("click", (e) => {
  // An example of a guard clause
  // With the following guard clause we are checking if the user expand/collapse button

  if (!e.target.matches(".expand-button")) return;

  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card-body");

  // Note the usage of toggle method on classList. It will remove/add class depending on if it already exists.
  cardBody.classList.toggle("show");

  if (e.target.innerText === "Expand") {
    e.target.innerText = "Collapse";
  } else {
    e.target.innerText = "Expand";
  }
  // As an alternative we can use the following syntax as well:
  // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
});
