const daysOfWeek = document.querySelector(".days-of-week");

// 요일별 스타일 적용
daysOfWeek.querySelectorAll("span").forEach((day, index) => {
  if (index === 0) {
    // 일요일 체크
    day.style.color = "red";
    // 다른 스타일도 적용 가능
  }
});
