const burgerMenu = (option) => {
  const { selectorBurger = ".burger", activeBurger = "burger--active", selectorMenu, openMenuSelector } = option;

  const burger = document.querySelector(selectorBurger);
  const menu = document.querySelector(selectorMenu);

  console.log(burger);
  console.log(menu);

  burger.addEventListener("click", () => {
    burger.classList.toggle(activeBurger);
    menu.classList.toggle(openMenuSelector);
  });
};

export default burgerMenu;
