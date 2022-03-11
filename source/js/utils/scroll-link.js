import {modals} from '../modules/modals/init-modals';

const advantages = document.querySelector('#advantages');
const nextCruise = document.querySelector('#next-cruise');
const contacts = document.querySelector('#contacts');
const links = document.querySelectorAll('.main-nav__item-link');
const isModalActive = document.querySelector('[data-modal="navigation"]');

const scrollToLink = () => {
  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (isModalActive && isModalActive.classList.contains('is-active')) {
        modals.close('navigation');
        setTimeout(() => {
          if (link.href.includes('advantages')) {
            advantages.scrollIntoView({
              behavior: 'smooth', block: 'start', inline: 'center',
            });
          } else if (link.href.includes('next-cruise')) {
            nextCruise.scrollIntoView({
              behavior: 'smooth', block: 'start', inline: 'center',
            });
          } else if (link.href.includes('contacts')) {
            contacts.scrollIntoView({
              behavior: 'smooth', block: 'start', inline: 'center',
            });
          }
        }, 400);
      } else if (link.href.includes('advantages')) {
        advantages.scrollIntoView({
          behavior: 'smooth', block: 'start', inline: 'center',
        });
      } else if (link.href.includes('next-cruise')) {
        nextCruise.scrollIntoView({
          behavior: 'smooth', block: 'start', inline: 'center',
        });
      } else if (link.href.includes('contacts')) {
        contacts.scrollIntoView({
          behavior: 'smooth', block: 'start', inline: 'center',
        });
      }
    });
  });
};

const breakpoint = window.matchMedia('(min-width:768px)');
const breakpointChecker = () => {
  if (breakpoint.matches) {
    if (isModalActive && isModalActive.classList.contains('is-active')) {
      modals.close('navigation');
    }
  }
};
breakpoint.addListener(breakpointChecker);

export {scrollToLink, breakpointChecker};
