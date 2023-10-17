window.addEventListener("load", () => {
  const userProfile = document.querySelector(".user-profile");
  const username = document.querySelector(".user-name");
  const userPhoneNumber = document.querySelector(".user-number");
  const userCharge = document.querySelector(".overlay");
  const mainUrl = "http://localhost:3000/api";
  const userToken = localStorage.getItem("user-token");
  fetch(`${mainUrl}/users`, {
    headers: {
      authorization: userToken,
    },
  })
    .then((res) => res.json())
    .then((user) => {
      userProfile.setAttribute("src", user[0].profile);
      username.innerHTML = `سلام،${user[0].firstname} ${user[0].lastname}`;
      userPhoneNumber.innerHTML = user[0].phone;
      userCharge.innerHTML = `${user[0].charge} تومان`;
    });
});
