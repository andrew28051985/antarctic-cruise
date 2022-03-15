const cruiseDescription = document.querySelectorAll('.next-cruise__wrapper');
const breakpoint = window.matchMedia('(max-width:1023px)');
const breakpointDesctop = window.matchMedia('(min-width:1024px)');
let countClick = 0;

const onEventListener = (evt) => {
  if (countClick === 0) {
    evt.preventDefault();
    ++countClick;
  } else if (countClick === 1 && evt.target.classList.contains('btn')) {
    countClick = 0;
  }
};

const onClickCard = () => {
  cruiseDescription.forEach((description) => {
    description.addEventListener('click', onEventListener);
  });
};
const offClickCard = () => {
  cruiseDescription.forEach((description) => {
    description.removeEventListener('click', onEventListener);
  });
};

const breakpointCheckerOnClickButtonCruise = () => {
  if (breakpoint.matches) {
    onClickCard();
  }
};
const breakpointCheckerOffClickButtonCruise = () => {
  if (breakpointDesctop.matches) {
    offClickCard();
  }
};

breakpoint.addListener(breakpointCheckerOnClickButtonCruise);
breakpointDesctop.addListener(breakpointCheckerOffClickButtonCruise);


export {breakpointCheckerOnClickButtonCruise, breakpointCheckerOffClickButtonCruise};
