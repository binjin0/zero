//API Used: http://newsapi.org/s/india-news-api
const container = document.querySelector(".news-list-container");
const optionsContainer = document.querySelector(".category-list");
const country = "kr";
const options = [
  { id: "all", name: "전체보기" },
  { id: "business", name: "비즈니스" },
  { id: "entertainment", name: "엔터테인먼트" },
  { id: "health", name: "건강" },
  { id: "science", name: "과학" },
  { id: "sports", name: "스포츠" },
  { id: "technology", name: "기술" },
];

//100 requests per day
let requestURL;

//Create cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-list");
    card.innerHTML = `<section class="news-item">
    <div class="thumbnail">
    <a href="${item.url}" target="_blank" class="view-button">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </a>
    </div>
    <div class="content">
      <h2>
       <a href="${item.url}" target="_blank" class="view-button">
        ${item.title}
        </a>
      </h2>
      <p>
      ${item.description || item.content || ""}
      </p>

      </section>
    </div>`;
    container.appendChild(card);
  }
};

//News API Call
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(`${requestURL}&pageSize=5`);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};
let currentPage = 1; // 시작 페이지

// 스크롤 이벤트 핸들러
const scrollEventHandler = () => {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  // 스크롤이 페이지 아래로 내려갔을 때 추가 뉴스 불러오기
  if (windowHeight + scrollPosition >= fullHeight) {
    currentPage++; // 다음 페이지로 이동
    getAdditionalNews(currentPage);
  }
};
//추가 뉴스 가져오기
const getAdditionalNews = async (page) => {
  let response = await fetch(`${requestURL}&page=${page}`);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};
window.addEventListener("scroll", scrollEventHandler);

//Category Selection
const selectCategory = (event) => {
  const clickedCategory = event.target;
  const activeCategory = document.querySelector(".category-item.active");
  activeCategory.classList.remove("active");

  clickedCategory.classList.add("active");

  let categoryType = "";
  switch (clickedCategory.id) {
    case "all":
      categoryType = "general"; // 기본적으로 전체보기는 'general' 카테고리로 설정
      break;
    case "business":
      categoryType = "business";
      break;
    case "entertainment":
      categoryType = "entertainment";
      break;
    case "health":
      categoryType = "health";
      break;
    case "science":
      categoryType = "science";
      break;
    case "sports":
      categoryType = "sports";
      break;
    case "technology":
      categoryType = "technology";
      break;
    default:
      categoryType = "general";
  }
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoryType}&page=${currentPage}&pageSize=5&apiKey=${apiKey}`;

  // 뉴스 데이터 가져오기
  getNews();
};

//Options Buttons
const createOptions = () => {
  const ulElement = document.createElement("ul"); // ul 태그 생성

  for (let i of options) {
    const liElement = document.createElement("li"); // li 태그 생성
    liElement.id = i.id.toLowerCase();
    liElement.classList.add("category-item");
    if (i.id === "all") {
      liElement.classList.add("active");
    }
    liElement.textContent = i.name; // li 태그의 내용 설정
    liElement.addEventListener("click", selectCategory);

    // li 태그를 ul 태그 안에 추가
    ulElement.appendChild(liElement);
  }

  optionsContainer.appendChild(ulElement); // ul 태그를 HTML에 추가
};

const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
  init();
};
