// do something!
window.addEventListener("load", function () {
  const toggleButton = document.querySelector(".toggle");
  const nav = document.querySelector("nav");

  // 토글 버튼 클릭 시 내비게이션 바 활성화/비활성화 토글
  toggleButton.addEventListener("click", function () {
    nav.classList.toggle("active"); // active 클래스를 추가/제거하여 내비게이션 표시/숨김
  });

  // 페이지 로드 후 초기화: 초기 렌더링 트랜지션 효과를 위한 클래스 제거
  document.body.classList.remove("preload");
});
