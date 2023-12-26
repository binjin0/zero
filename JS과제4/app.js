const calendar = document.querySelector(".calendar");
const monthYearElement = calendar.querySelector(".month-year");
const prevMonthBtn = calendar.querySelector(".prev-month-btn");
const nextMonthBtn = calendar.querySelector(".next-month-btn");
const daysElement = calendar.querySelector(".days");
let currentDate = new Date();

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});
function renderCalendar() {
  const prevMonthLastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const lastDayIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  monthYearElement.innerHTML = `${
    monthNames[currentDate.getMonth()]
  }<br>${currentDate.getFullYear()}`;

  let days = "";

  for (let i = 0; i < firstDayIndex; i++) {
    days += `<span class="prev-date">${prevMonthLastDate - i}</span>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days += `<span>${i}</span>`;
  }

  const remainingDays = 42 - (firstDayIndex + daysInMonth); // 6주 표시를 위한 총 날짜 수 (7일 * 6주 = 42일)

  // 다음 달의 날짜를 렌더링
  for (let i = 1; i <= remainingDays; i++) {
    days += `<span class="next-date">${i}</span>`;
  }

  daysElement.innerHTML = days;
  const today = new Date().getDate();

  // days 요소 안의 모든 span 태그를 선택합니다.
  const allDays = document.querySelectorAll(".days span");

  // 각 날짜에 대해 처리합니다.
  allDays.forEach((day) => {
    const dayNumber = parseInt(day.textContent); // 날짜 텍스트를 정수형으로 파싱합니다.

    // 오늘 날짜와 같은 경우, 동그라미를 그립니다.
    if (
      dayNumber === today &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      day.style.position = "relative"; // 동그라미를 위해 상대적인 위치 설정
      const circle = document.createElement("div"); // 동그라미를 나타내는 div 요소 생성
      circle.classList.add("circle"); // 동그라미를 나타내는 클래스 추가
      day.appendChild(circle); // 해당 날짜 요소에 동그라미 추가
    }
    if (currentDate.getMonth() !== new Date().getMonth()) {
      day.style.position = ""; // 포지션 초기화
      const existingCircle = day.querySelector(".circle"); // 이미 있는 동그라미 확인
      if (existingCircle) {
        existingCircle.remove(); // 동그라미 제거
      }
    }
  });
}
renderCalendar();
