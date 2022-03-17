const cruiseItem = document.querySelectorAll('.next-cruise__item');
const breakpoint = window.matchMedia('(max-width:1023px)');
const breakpointDesctop = window.matchMedia('(min-width:1024px)');

let countClick = 0;

const onClick = (evt) => {
  if (countClick === 0) {
    evt.preventDefault();
    ++countClick;
  } else if (countClick === 1 && evt.target.classList.contains('btn')) {
    countClick = 0;
  }
};

const onBlurListener = () => {
  countClick = 0;
};

const onFocusListener = (item) => {
  item.addEventListener('click', onClick);
};

const onFocusCard = () => {
  cruiseItem.forEach((item) => {
    item.addEventListener('focus', onFocusListener(item));
  });
};
const onMouseOutCard = () => {
  cruiseItem.forEach((item) => {
    item.addEventListener('mouseout', onBlurListener);
  });
};
const offClickCard = () => {
  cruiseItem.forEach((item) => {
    item.removeEventListener('focus', onFocusListener(item));
    item.removeEventListener('mouseout', onBlurListener);
    item.removeEventListener('click', onClick);
  });
};

const breakpointCheckerOnClickButtonCruise = () => {
  if (breakpoint.matches) {
    countClick = 0;
    onMouseOutCard();
    onFocusCard();
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
