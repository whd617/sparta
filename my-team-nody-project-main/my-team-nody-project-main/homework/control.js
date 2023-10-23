const button = document.querySelector(".numberIntro button");
const div = document.querySelector(".numberIntro div");

div.innerHTML = "hello";
console.dir(div);

function handleTitleClick() {
  const clickedClass = "active";
  if (button.classList.contains(clickedClass)) {
    button.classList.remove(clickedClass);
  } else {
    button.classList.add(clickedClass);
  }
  console.dir(div);
}

button.addEventListener("click", handleTitleClick);
