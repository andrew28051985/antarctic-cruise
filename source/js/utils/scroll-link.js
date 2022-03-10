const advantages = document.querySelector('#advantages');
const nextCruise = document.querySelector('#next-cruise');
const contacts = document.querySelector('#contacts');
const links = document.querySelectorAll('.main-nav__item-link');

const scrollToLink = () => {
  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
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
    });
  });
};

export {scrollToLink};
