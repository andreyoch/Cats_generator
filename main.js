let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let container = document.querySelector(".flex-row");
let content = document.querySelector(".after-text");

let generateImg = () => {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  let img = document.createElement("img");
  imgContainer.appendChild(img);
  img.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  container.appendChild(imgContainer);
};

btn.addEventListener("click", (e) => {
  let userAnswerNumber = parseInt(input.value);

  if (Number.isInteger(userAnswerNumber)) {
    content.appendChild(
      document.createTextNode(
        `You generated ${input.value} cats if you want new cat image please refresh the page`
      )
    );

    for (let i = 0; i < input.value; i++) {
      generateImg();
    }
  } else {
    alert("Please provide a number");
  }
});
