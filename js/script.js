const headerLists = document.querySelectorAll(".header-list");
const contentLists = document.querySelectorAll(
  ".portfolio-experience__content"
);
// for (let headerList of headerLists) {
//   headerList.addEventListener("click", showTabContent);
//   function showTabContent(e) {
//     if (headerList) {
//       console.log(e);
//       headerList.classList.toggle("active");
//     } else {
//       headerList.classList.remove("active");
//     }
//   }
// }

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
