function openModal() {
  //데이터 얻기, 나중에 서버 데이터로 수정
  modalData = {
    enName: "JEJU",
    koName: "대한민국 제주",
    content: `섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수 있는 천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.`,
  };

  //nav 안보이게, body 스크롤 금지
  document.querySelector("nav").style.display = "none";
  document.querySelector("body").style.overflow = "hidden";

  //데이터 삽입
  let modalContent = document.querySelector(".modal-content").children;
  modalContent[0].innerText = modalData.enName;
  modalContent[1].innerText = modalData.koName;
  modalContent[2].innerText = modalData.content;

  //모달 창 출력
  document.querySelector(".modal").style.display = "flex";
}

function closeModal() {
  //nav, body 원상 복구
  document.querySelector("nav").style.display = "block";
  document.querySelector("nav").style.position = "fixed";
  document.querySelector("body").style.overflow = "visible";

  //모달 창 닫기
  document.querySelector(".modal").style.display = "none";
}
