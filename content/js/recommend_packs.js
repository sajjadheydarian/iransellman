window.addEventListener("load", () => {
  const recommendPacksTable = document.querySelector(
    ".recommend-packets-table"
  );
  const recommendPacksTableBody = recommendPacksTable.querySelector("tbody");
  const mainUrl = "http://localhost:3000/api";
  const userToken = localStorage.getItem("user-token");
  fetch(`${mainUrl}/recommend_packs`, {
    headers: {
      authorization: userToken,
    },
  })
    .then((res) => res.json())
    .then((packs) => {
      if (packs.length) {
        packs.forEach((pack) => {
          recommendPacksTableBody.insertAdjacentHTML(
            "beforeend",
            `<tr>
                <td>${pack.max_date}</td>
                <td>${pack.title}</td>
                <td>${pack.off}%</td>
                <td>${pack.price}</td>
                <td><button class="buy-packets-btn lalezar-font">خرید</button></td>
              </tr>`
          );
        });
      } else {
        recommendPacksTableBody.innerHTML = "بسته پیشنهادی برای شما وجود ندارد";
        recommendPacksTable.setAttribute("style", "border:none");
      }
    });
});
