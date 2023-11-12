let poses = document.getElementsByClassName("pos");
let down = document.querySelector(".downside-container");
let posIdx = 0;
// const fs = require("fs");
// const dirDest = "../img/osaka_tour_dest";

// let fileLen = getFileLen();

// const getFileLen = () => {
//   fs.readdir(dirDest, (err, files) => {
//     console.log(files.length);
//     return files.length;
//   });
// };
const places = [
  {
    placeName: "간사이 국제 공항",
    imgSrc: "osaka_tour_dest/kansaiAirport.jpg",
    imgAlt: "간사이 국제 공항",
  },
  {
    placeName: "오사카 성",
    imgSrc: "osaka_tour_dest/castle.jpg",
    imgAlt: "오사카 성",
  },
  {
    placeName: "도톤보리",
    imgSrc: "osaka_tour_dest/dotonbori.jpg",
    imgAlt: "도톤보리",
  },
  {
    placeName: "우메다 공중정원",
    imgSrc: "osaka_tour_dest/skygarden.jpg",
    imgAlt: "우메다 공중정원",
  },
  {
    placeName: "가이유칸",
    imgSrc: "osaka_tour_dest/가이유칸.jpg",
    imgAlt: "가이유칸",
  },
  {
    placeName: "덴노지 동물원",
    imgSrc: "osaka_tour_dest/덴노지 동물원.jpg",
    imgAlt: "덴노지 동물원",
  },
  {
    placeName: "헵파이브",
    imgSrc: "osaka_tour_dest/헵파이브.jpg",
    imgAlt: "헵파이브",
  },
];

const hotels = [
  {
    placeName: "한쿠호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Hotel-Hankyu-International1.jpg",
    imgAlt: "한쿠호텔",
  },
  {
    placeName: "몬테리호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Hotel-Monterey-Grasmere-Osaka1.jpg",
    imgAlt: "몬테리호텔",
  },
  {
    placeName: "마리요트호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Osaka-Marriott-Miyako-Hotel1.jpg",
    imgAlt: "마리요트호텔",
  },
  {
    placeName: "세라톤호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Sheraton-Miyako-Hotel-Osaka1.jpg",
    imgAlt: "세라톤호텔",
  },
  {
    placeName: "미야코호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Sheraton-Miyako-Hotel-Osaka3.jpg",
    imgAlt: "미야코호텔",
  },
  {
    placeName: "스위스텔호텔",
    imgSrc:
      "osaka_hotel/City-guides_Osaka_best-luxury-hotels_Swissotel-Nankai-Osaka-Hotel1.jpg",
    imgAlt: "스위스텔호텔",
  },
];

const changeImg = () => {
  for (let i = 0; i < pos.length; i++) {
    if (pos[i].classList.contains("clicked")) {
      posIdx = i;
      break;
    }
  }

  if (posIdx == 0) {
    let planHtml = `<div class="data-container">`;
    for (let place of places) {
      planHtml += `<div class="get-data">
        <img
          src="./assets/img/${place.imgSrc}"
          alt="${place.imgAlt}"
          class="data-img"
        />
        <div class="img-name">${place.placeName}</div>
      </div>`;
    }
    planHtml += `</div>`;

    down.innerHTML = planHtml;
  } else if (posIdx == 1) {
    let planHtml = `<div class="data-container">`;
    for (let hotel of hotels) {
      planHtml += `<div class="get-data">
          <img
            src="./assets/img/${hotel.imgSrc}"
            alt="${hotel.imgAlt}"
            class="data-img"
          />
          <div class="img-name">${hotel.placeName}</div>
        </div>`;
    }
    planHtml += `</div>`;

    down.innerHTML = planHtml;
  } else if (posIdx == 2) {
    let planHtml = `<div class="data-container">`;
    for (let food of foods) {
      planHtml += `<div class="get-data">
          <img
            src="./assets/img/${food.imgSrc}"
            alt="${food.imgAlt}"
            class="data-img"
          />
          <div class="img-name">${food.placeName}</div>
        </div>`;
    }
    planHtml += `</div>`;

    down.innerHTML = planHtml;
  } else if (posIdx == 3) {
    let planHtml = `<div class="data-container">`;
    for (let culture of cultures) {
      planHtml += `<div class="get-data">
          <img
            src="./assets/img/${culture.imgSrc}"
            alt="${culture.imgAlt}"
            class="data-img"
          />
          <div class="img-name">${culture.placeName}</div>
        </div>`;
    }
    planHtml += `</div>`;

    down.innerHTML = planHtml;
  }
};

const init_img = () => {
  for (let i = 0; i < poses.length; i++) {
    poses[i].addEventListener("click", changeImg);
  }
};

init_img();

const foods = [
  {
    placeName: "ky돈까스",
    imgSrc: "osaka_foods/ky돈까스.jpg",
    imgAlt: "ky돈까스",
  },
  {
    placeName: "돈소쿠카도야",
    imgSrc: "osaka_foods/돈소쿠노카도야.jpg",
    imgAlt: "돈소쿠카도야",
  },
  {
    placeName: "모뎃포라멘",
    imgSrc: "osaka_foods/무뎃포라멘.jpg",
    imgAlt: "모뎃포라멘",
  },
  {
    placeName: "스시히데조우",
    imgSrc: "osaka_foods/스시히데조우.jpg",
    imgAlt: "스시히데조우",
  },
  {
    placeName: "신사이바시스지",
    imgSrc: "osaka_foods/신사이바시스지.jpg",
    imgAlt: "신사이바시스지",
  },
  {
    placeName: "아지노야",
    imgSrc: "osaka_foods/아지노야.jpg",
    imgAlt: "아지노야",
  },
  {
    placeName: "우오신스시",
    imgSrc: "osaka_foods/우오신스시.jpg",
    imgAlt: "우오신스시",
  },
  {
    placeName: "진세이",
    imgSrc: "osaka_foods/진세이.jpg",
    imgAlt: "진세이",
  },
  {
    placeName: "킨구에몬",
    imgSrc: "osaka_foods/킨구에몬.jpg",
    imgAlt: "킨구에몬",
  },
  {
    placeName: "토미타규카츠",
    imgSrc: "osaka_foods/토미타규카츠.jpg",
    imgAlt: "토미타규카츠",
  },
  {
    placeName: "하쿠긴테이",
    imgSrc: "osaka_foods/하쿠긴테이.jpg",
    imgAlt: "하쿠긴테이",
  },
];

const cultures = [
  {
    placeName: "덴덴타운",
    imgSrc: "osaka_culture/덴덴타운.jpg",
    imgAlt: "덴덴타운",
  },
  {
    placeName: "린쿠아울렛",
    imgSrc: "osaka_culture/린쿠아울렛.jpg",
    imgAlt: "린쿠아울렛",
  },
  {
    placeName: "아메리카무라",
    imgSrc: "osaka_culture/아메리카무라.jpg",
    imgAlt: "아메리카무라",
  },
  {
    placeName: "크리스타나가호리",
    imgSrc: "osaka_culture/크리스타나가호리.jpg",
    imgAlt: "크리스타나가호리",
  },
];
