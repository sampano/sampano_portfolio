const headerLists = document.querySelectorAll(".header-list");
const contentLists = document.querySelectorAll(
  ".portfolio-experience__content"
);
headerLists.forEach(function (item, index) {
  item.addEventListener(
    "click",
    function () {
      headerLists.forEach(function (item, index) {
        item.classList.remove("active");
        // console.log(index);
        contentLists[index].classList.remove("active");
      });
      item.classList.add("active");
      contentLists[index].classList.add("active");
      //   console.log("sdhsd" + item);
    },
    false
  );
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));

//BURGER MENU
const burgerMenu = document.querySelector(".burger-open");
const navItems = document.querySelector(".nav-items");

const showNavItems = () => {
  for (let burgerClass of burgerMenu.classList) {
    if (burgerClass === "fa-burger") {
      burgerMenu.classList.remove("fa-burger");
      burgerMenu.classList.add("fa-x");
      document.body.classList.add("sider");
      navItems.classList.add("active");
      document.body.classList.remove("sider-close");
    } else if (burgerClass === "fa-x") {
      burgerMenu.classList.remove("fa-x");
      burgerMenu.classList.add("fa-burger");
      document.body.classList.remove("sider");
      document.body.classList.add("sider-close");
      navItems.classList.remove("active");
    }
  }
};

burgerMenu.addEventListener("click", showNavItems);
