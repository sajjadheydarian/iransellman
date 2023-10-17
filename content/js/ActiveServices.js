window.addEventListener("load", () => {
  const activeServicesTitle = document.querySelector(".service-title");
  const mainUrl = "http://localhost:3000/api";
  const userToken = localStorage.getItem("user-token");
  fetch(`${mainUrl}/services/1`)
    .then((res) => res.json())
    .then((services) => {
      services.forEach((service) => {
        activeServicesTitle.insertAdjacentHTML(
          "afterend",
          ` <div class="active-service-box flex align-items-center vazir-fb">
            <span
              class="active-service-icon flex align-items-center justify-content-center"
            >
              <i class="${service.icon}"></i>
            </span>
            <div class="active-service-box-desc">
              <h4>${service.title}</h4>
              <h6>${service.maxDate}</h6>
            </div>
          </div>`
        );
      });
    });
});
