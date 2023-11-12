function searchBtnClick() {
  filter();
}

function filter() {
  let keyword = document
    .querySelector(".search-input input")
    .value.toLowerCase();
  let items = document.querySelector(".search-items").children;

  for (let i = 0; i < items.length; i++) {
    let enItemName = items[i]
      .querySelector(".search-item-data > h2")
      .innerText.toLowerCase();
    let koItemName = items[i]
      .querySelector(".search-item-data > p")
      .innerText.toLowerCase();

    if (keyword == "") {
      items[i].style.display = "block";
      continue;
    }

    if (keyword.includes(enItemName) || keyword.includes(koItemName)) {
      items[i].style.display = "block";
    } else if (enItemName.includes(keyword) || koItemName.includes(keyword)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
