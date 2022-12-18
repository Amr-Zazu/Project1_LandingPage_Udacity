// Global Variables
let navList = document.querySelector("#navbar__list"); // Navbar List
let sections = Array.from(document.querySelectorAll("main section")); // Sections
let btn = document.createElement("button"); // Back To The Top Button
btn.textContent = "Back to the top";
btn.style.cssText =
  "width: 150px; padding: 20px 3px;  font-size: 20px; text-align: center; float: right; background-color:red; color:white; cursor:pointer; border: none; border-radius: 4px; margin:5px;";

// Create Navbar Items From Sections List
const createNavItems = () => {
  for (sec of sections) {
    let secItem = document.createElement("li");
    secItem.innerHTML = `<li><a class="menu__link" href="#${sec.id}">${sec.dataset.nav}</a></li>`;
    navList.appendChild(secItem);
  }
};
createNavItems();

// Adding Active Class When Scroll To Each Section
const addingActiveOnScrolling = () => {
  window.onscroll = () => {
    for (sec of sections) {
      let rect = sec.getBoundingClientRect();
      if (
        window.screenY >= rect.top - 200 ||
        window.screenY >= rect.top - 400
      ) {
        sec.parentElement
          .querySelectorAll(".your-active-class")
          .forEach((sec) => {
            sec.classList.remove("your-active-class");
          });
        sec.classList.add("your-active-class");
      }
    }

    // Show Back To The Top Button When Go To Bottom Of Window
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      document.body.appendChild(btn);
    }
  };
};
addingActiveOnScrolling();

// Making Smooth Scroll On Each Link
let navLinks = document.querySelectorAll("header nav ul a"); // Navbar Links
for (const link of navLinks) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
}
