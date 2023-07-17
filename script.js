let count = 0;

const val = document.querySelector("#value");
const btns = document.querySelectorAll(".buttons");

btns.forEach((btn) => {

  btn.addEventListener("click", (event) => {
    const target = event.currentTarget.classList;
    if (target.contains("decrease")) {
      count--;
    } else if (target.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    let color = "black";

    if (count < 0) {
      color = "red";
    } else if (count > 0) {
      color = "green";
    }

    val.style.color = color;

    val.textContent = count;
  });
});
