// Переключатель «Было / Стало» и копирование промптов
(function () {
  var tabs = document.querySelectorAll('.toggle button');
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === b;
        t.setAttribute('aria-selected', String(on));
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (on) { panel.classList.remove('reveal'); void panel.offsetWidth; panel.classList.add('reveal'); }
      });
    });
  });
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Скопировано';
        btn.setAttribute('data-done', '');
        setTimeout(function () { btn.textContent = 'Скопировать запрос'; btn.removeAttribute('data-done'); }, 2000);
      }, function () { btn.textContent = 'Выдели текст и скопируй вручную'; });
    });
  });
})();
