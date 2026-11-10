document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
    });
  }

  const search = document.querySelector('#guide-search');
  const cards = [...document.querySelectorAll('.guide-card')];
  const empty = document.querySelector('#empty-state');
  if (search && cards.length) {
    search.addEventListener('input', () => {
      const q = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const haystack = (card.dataset.search + ' ' + card.innerText).toLocaleLowerCase();
        const match = haystack.includes(q);
        card.hidden = !match;
        if (match) visible++;
      });
      if (empty) empty.hidden = visible !== 0;
    });
  }
});
