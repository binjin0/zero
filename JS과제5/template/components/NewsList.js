// do something!
const container = document.querySelector(".news-list-container");
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
