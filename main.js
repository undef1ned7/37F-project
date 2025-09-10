let btn = document.querySelector(".mobile-btn");

const toggleBurger = (menuClass, showMenuClass) => {
  let menu = document.querySelector(`.${menuClass}`);

  if (menu.className.includes(showMenuClass)) {
    menu.className = menuClass;
  } else {
    menu.className += ` ${showMenuClass}`;
  }
};

btn.addEventListener("click", () => {
  toggleBurger("header-nav", "header-nav-show");
});

console.log(1);
console.log(2);
console.log(3);

// let btn = document.querySelector(".mobile-btn");

// const toggleBurger = (menuClass, showMenuClass) => {
//   let menu = document.querySelector(`.${menuClass}`);

//   if (menu.className.includes(showMenuClass)) {
//     menu.className = menuClass;
//   } else {
//     menu.className += ` ${showMenuClass}`;
//   }
// };

// btn.addEventListener("click", () => {
//   toggleBurger("header-nav", "header-nav-show");
// });
