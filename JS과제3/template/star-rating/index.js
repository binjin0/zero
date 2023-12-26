function StarRating($container) {
  const numberOfStars = parseInt($container.dataset.maxRating);
  const stars = [];

  for (let i = 0; i < numberOfStars; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("bx", "bxs-star");
    stars.push(starIcon);
    $container.appendChild(starIcon);

    starIcon.addEventListener("click", (e) => {
      const starIndex = stars.indexOf(starIcon);

      if (starIndex !== -1) {
        const rating = starIndex + 1;

        // 클릭된 별과 이전 별들에 클래스 추가
        stars.forEach((star, index) => {
          if (index <= starIndex) {
            star.classList.add("selected");
          } else {
            star.classList.remove("selected");
          }
        });

        const ratingChangeEvent = new CustomEvent("rating-change", {
          detail: rating,
        });
        $container.dispatchEvent(ratingChangeEvent);
      }
    });
    starIcon.addEventListener("mouseover", (e) => {
      const starIndex = stars.indexOf(starIcon);

      if (starIndex !== -1) {
        stars.forEach((star, index) => {
          if (index <= starIndex) {
            star.classList.add("hovered");
          } else {
            star.classList.remove("hovered");
          }
        });
      }
    });

    starIcon.addEventListener("mouseout", (e) => {
      stars.forEach((star) => {
        star.classList.remove("hovered");
      });
    });
  }
}

export default StarRating;
