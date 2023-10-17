window.addEventListener("load", () => {
  const BuyesPacksTable = document.querySelector(".recommend-packets-table");
  const BuyesPacksTableBody = BuyesPacksTable.querySelector("tbody");
  const mainUrl = "http://localhost:3000/api";
  const userToken = localStorage.getItem("user-token");
  fetch(`${mainUrl}/user_buy`, {
    headers: {
      authorization: userToken,
    },
  })
    .then((res) => res.json())
    .then((packs) => {
      if (packs.length) {
        packs.forEach((pack) => {
          BuyesPacksTableBody.insertAdjacentHTML(
            "beforeend",
            `<tr>
            <td>${pack.title}</td>
                    <td>${pack.buy_date}</td>
                    <td>${pack.max_date}</td>
                    <td>${pack.off}%</td>
                    <td>${pack.price}</td>
            
                  </tr>`
          );
        });
      } else {
        BuyesPacksTableBody.innerHTML = "بسته خریداری شده برای شما وجود ندارد";
        BuyesPacksTable.setAttribute("style", "border:none");
      }
    });
});
