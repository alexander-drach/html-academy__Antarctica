import {ScrollLock} from '../../utils/scroll-lock';
import {FocusLock} from '../../utils/focus-lock';

const clickMenuLinks = () => {
  if (document.querySelectorAll('.menu--header .menu__link').length > 0) {
    const menuHeaderLinks = document.querySelectorAll('.menu--header .menu__link');
    const header = document.querySelector('[data-header]');

    menuHeaderLinks.forEach((item) => {
      item.addEventListener('click', () => {
        if (header.classList.contains('is-open')) {
          header.classList.remove('is-open');

          item._focusLock = new FocusLock();
          item._focusLock.unlock('[data-header]');

          item._scrollLock = new ScrollLock();
          item._scrollLock.enableScrolling();
        }
      });
    });
  }
};

export {clickMenuLinks};
