let data = [];

let container = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => {
    data = res;

    data.forEach((val) => {
      let coloredStar = parseInt(val.rating.rate);
      let unColoredStar = 5 - coloredStar;
      let allStarDiv = document.createElement("div");
      let tempDiv = document.createElement("div");
      allStarDiv.setAttribute("id", "stars");
      allStarDiv.setAttribute("class", "stars");

      for (let i = 0; i < coloredStar; i++) {
        allStarDiv.innerHTML += `
        <span class="star">&#9733</span>`;
      }

      for (let i = 0; i < unColoredStar; i++) {
        allStarDiv.innerHTML += `
        <span class="star-unfilled">&#9734</span>`;
      }
      tempDiv.appendChild(allStarDiv);
      container.innerHTML += `
        <div class="card">
        <img
          class="product-img"
          src=${val.image}
          alt="product-image"
        />
        <div class="product-details">
          <span class="product-name"
            >${val.title}</span
          >
          <span class="product-category">${val.category}</span>
         ${tempDiv.innerHTML}
		  <div class="rating-count">Rating Count:
			<span>${val.rating.count}</span>
		  </div>
        </div>
        <div class="btn">
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>`;
    });
  });
