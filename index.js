window.onload = function () {
  console.log('[window onload] : [start]');
};

module.export = function scrollFunc() {
  const button = document.querySelector('button');

  const showScrollBtn = function () {
    window.scrollY > window.innerHeight
      ? button.classList.add('show-button')
      : button.classList.remove('show-button');
  };
  window.addEventListener('scroll', showScrollBtn);

  const scrollToTop = function () {
    const currentPosition = window.scrollY;
    if (currentPosition != 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // safafi 적용을 위한 코드 예시 (미적용)
      // setTimeout(function () {
      //   window.scrollTo(0, currentPosition - 50);
      //   scrollToTop();
      // }, 10);
      scrollToTop();
    }
  };
  button.addEventListener('click', scrollToTop);
};
