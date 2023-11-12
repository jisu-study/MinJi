let pos = document.getElementsByClassName("pos");

const pos_click = (event) => {
  //   console.log(event.target);

  //   console.log(event.target.classList);

  if (event.target.classList[0] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < pos.length; i++) {
      pos[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
};

const init = () => {
  for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener("click", pos_click);
  }
};

init();
