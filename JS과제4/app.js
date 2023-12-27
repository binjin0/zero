const calendar = document.querySelector(".calendar");
const monthYearElement = calendar.querySelector(".month-year");
const prevMonthBtn = calendar.querySelector(".prev-month-btn");
const nextMonthBtn = calendar.querySelector(".next-month-btn");
const selectDataBtn = document.querySelector(".select-data");

const daysElement = calendar.querySelector(".days");
let currentDate = new Date();
calendar.addEventListener("click", () => {
  selectDataBtn.style.borderColor = "";
});
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

    if (
      day.classList.contains("prev-date") ||
      day.classList.contains("next-date")
    ) {
      day.style.position = ""; // 포지션 초기화
      const existingCircle = day.querySelector(".circle"); // 이미 있는 동그라미 확인
      if (existingCircle) {
        existingCircle.remove(); // 동그라미 제거
      }
    }

    if (currentDate.getDay() === 0) {
      // 일요일을 식별하고 해당 날짜에 스타일 추가
      day.classList.add("sunday");
    }
    day.addEventListener("mouseover", () => {
      day.style.borderRadius = "50%";
      day.style.color = "white";
      day.style.backgroundColor = "#3bb96d"; // 마우스를 올렸을 때의 배경색
      day.style.cursor = "pointer"; // 마우스 커서 모양을 변경합니다.
    });

    // 마우스가 날짜에서 벗어났을 때 색을 원래대로 돌려놓는 이벤트 리스너를 추가합니다.
    day.addEventListener("mouseout", () => {
      day.style.backgroundColor = ""; // 기본 배경색으로 변경합니다.
      day.style.color = "black";
    });
    day.addEventListener("click", () => {
      const clickedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        parseInt(day.textContent)
      );
      clickedDate.setMinutes(
        clickedDate.getMinutes() - clickedDate.getTimezoneOffset()
      );
      // 날짜를 'yyyy-mm-dd' 형식으로 변환합니다.
      const formattedDate = clickedDate.toISOString().slice(0, 10);

      // 콘솔에 출력합니다.
      console.log(formattedDate);

      selectDataBtn.textContent = formattedDate;
      calendar.style.display = "none";
    });
  });
  const prevDates = document.querySelectorAll(".prev-date");
  const nextDates = document.querySelectorAll(".next-date");
  prevDates.forEach((prevDate) => {
    prevDate.addEventListener("mouseover", () => {
      prevDate.style.borderRadius = "50%";
      prevDate.style.color = "white";
      prevDate.style.backgroundColor = "#3bb96d"; // 마우스를 올렸을 때의 배경색
      prevDate.style.cursor = "pointer"; // 마우스 커서 모양을 변경합니다.
    });
    prevDate.addEventListener("mouseout", () => {
      prevDate.style.backgroundColor = "";
      prevDate.style.color = "#e2e0e2";
    });
  });
}
renderCalendar();

// const selectDataBtn = document.querySelector(".select-data");
// const calendar = document.querySelector(".date-picker");

selectDataBtn.addEventListener("click", () => {
  if (calendar.style.display === "block") {
    calendar.style.display = "none"; // 캘린더가 이미 보이면 숨김
    selectDataBtn.style.borderColor = "";
  } else {
    calendar.style.display = "block"; // 캘린더가 보이지 않으면 보이도록 설정
    selectDataBtn.style.borderColor = "blue";
  }
});
document.addEventListener("click", (event) => {
  if (!calendar.contains(event.target) && event.target !== selectDataBtn) {
    calendar.style.display = "none"; // 캘린더 숨김
    selectDataBtn.style.borderColor = ""; // 테두리 색상 초기화
  }
});
