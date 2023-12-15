function saveNavigationState(state) {
  localStorage.setItem("navigationState", state);
}
function getNavigationState() {
  return localStorage.getItem("navigationState");
}
window.addEventListener("load", function () {
  const toggleButton = document.querySelector(".toggle");
  const nav = document.querySelector("nav");

  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active");

    // 내비게이션 상태를 localStorage에 저장
    const isActive = nav.classList.contains("active");
    saveNavigationState(isActive);
  });

  // 페이지 로드 시, localStorage에서 이전 내비게이션 상태를 가져와 적용
  const previousState = getNavigationState();
  if (previousState === "true") {
    nav.classList.add("active");
  }

  // 페이지 로드 후 초기화: 초기 렌더링 트랜지션 효과를 위한 클래스 제거
  document.body.classList.remove("preload");
});
