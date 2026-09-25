const buttons = document.querySelectorAll('.path-btn');
const filterable = document.querySelectorAll('[data-paths]');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const path = btn.dataset.path;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    filterable.forEach(item => {
      const paths = item.dataset.paths.split(' ');
      const show = path === 'all' || paths.includes(path);
      item.classList.toggle('hidden-by-path', !show);
    });
  });
});
