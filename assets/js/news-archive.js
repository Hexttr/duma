document.addEventListener('DOMContentLoaded', () => {
    try {
        const list = document.getElementById('archive-list');
        if (!list || !Array.isArray(window.NEWS_DATA)) return;

        const sorted = [...window.NEWS_DATA].sort((a, b) => {
            const dateA = a.dateISO ? new Date(a.dateISO) : new Date(a.dateText?.split('.').reverse().join('-') || 0);
            const dateB = b.dateISO ? new Date(b.dateISO) : new Date(b.dateText?.split('.').reverse().join('-') || 0);
            return dateB - dateA;
        });

        sorted.forEach(item => {
            const card = document.createElement('article');
            card.className = 'archive-card';
            card.innerHTML = `
                <div class="archive-card__head">
                    <time class="archive-card__date" datetime="${item.dateISO || ''}">${item.dateText || ''}</time>
                </div>
                <a class="archive-card__title" href="${item.slug}.html">${item.title}</a>
                ${item.excerpt ? `<p class="archive-card__excerpt">${item.excerpt}</p>` : ''}
            `;
            list.appendChild(card);
        });
    } catch(e) {
        console.error('Archive render error:', e);
    }
});

