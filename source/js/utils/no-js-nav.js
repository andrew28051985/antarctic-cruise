const buttonNav = document.querySelector('.page-header__toggle-nav');
const nav = document.querySelector('.page-header__wrapper-nav');
const cruise = document.querySelector('.cruise');
const cruiseWrapper = cruise.querySelector('.cruise__wrapper');

const getNavNoJs = () => {
  cruise.classList.remove('cruise--no-js');
  cruiseWrapper.classList.remove('cruise__wrapper--no-js');
  nav.classList.remove('page-header__wrapper-nav--no-js-nav');
  buttonNav.classList.remove('page-header__toggle-nav--no-js');
};

export {getNavNoJs};
