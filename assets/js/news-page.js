document.addEventListener('DOMContentLoaded', () => {
  try {
    const article = document.querySelector('article[data-news-id]');
    const id = Number(article?.getAttribute('data-news-id'));
    const data = Array.isArray(window.NEWS_DATA) ? window.NEWS_DATA.find(n => n.id === id) : null;
    if (!article || !data) return;
    const titleEl = document.getElementById('news-title');
    const dateEl = document.getElementById('news-date');
    const contentEl = document.getElementById('news-content');
    if (titleEl) titleEl.textContent = data.title;
    if (dateEl) {
      if (data.dateISO) dateEl.setAttribute('datetime', data.dateISO);
      dateEl.textContent = data.dateText || '';
    }
    if (contentEl) {
      contentEl.innerHTML = '';
      data.content.forEach(p => {
        const para = document.createElement('p');
        para.textContent = p;
        contentEl.appendChild(para);
      });
    }
  } catch(e) { /* no-op */ }
});




