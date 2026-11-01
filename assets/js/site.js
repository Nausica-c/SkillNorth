(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
  }

  const search = document.getElementById('cluster-search');
  const clear = document.getElementById('clear-search');
  const grid = document.querySelector('[data-cluster-grid]');
  const status = document.getElementById('search-status');
  const empty = document.querySelector('.empty-search');
  if (search && grid) {
    const cards = Array.from(grid.querySelectorAll('.cluster-card'));
    const run = () => {
      const query = search.value.trim().toLowerCase();
      let count = 0;
      cards.forEach(card => {
        const match = !query || (card.dataset.search || '').includes(query);
        card.hidden = !match;
        if (match) count += 1;
      });
      if (status) status.textContent = query ? `Showing ${count} of ${cards.length} skill clusters.` : `Showing all ${cards.length} skill clusters.`;
      if (empty) empty.hidden = count !== 0;
    };
    search.addEventListener('input', run);
    if (clear) clear.addEventListener('click', () => { search.value = ''; run(); search.focus(); });
    run();
  }
})();
