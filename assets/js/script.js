document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

    function openMobileMenu() {
        if (mobileMenu && mobileMenuOverlay && mobileMenuToggle) {
            mobileMenu.classList.add('is-open');
            mobileMenuOverlay.classList.add('is-active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            mobileMenuOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        if (mobileMenu && mobileMenuOverlay && mobileMenuToggle) {
            mobileMenu.classList.remove('is-open');
            mobileMenuOverlay.classList.remove('is-active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileMenu?.classList.contains('is-open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Mobile menu item clicks
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    mobileMenuItems.forEach(item => {
        // Find direct child link
        const link = Array.from(item.children).find(child => child.tagName === 'A');
        // Find direct child submenu
        const submenu = Array.from(item.children).find(child => child.classList.contains('mobile-submenu'));
        
        if (link && submenu) {
            // Item has submenu - toggle it on click
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = submenu.classList.contains('is-open');
                if (isOpen) {
                    submenu.classList.remove('is-open');
                    item.classList.remove('is-open');
                } else {
                    // Close other open submenus at the same level
                    const parent = item.parentElement;
                    if (parent) {
                        parent.querySelectorAll('.mobile-submenu.is-open').forEach(openSubmenu => {
                            if (openSubmenu !== submenu) {
                                openSubmenu.classList.remove('is-open');
                            }
                        });
                        parent.querySelectorAll('.mobile-menu-item.is-open').forEach(openItem => {
                            if (openItem !== item) {
                                openItem.classList.remove('is-open');
                            }
                        });
                    }
                    submenu.classList.add('is-open');
                    item.classList.add('is-open');
                }
            });
        } else if (link) {
            // Item has no submenu - close menu and navigate
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        }
    });
    
    // Close menu when clicking on submenu links (only for links without submenu)
    const mobileSubmenuLinks = document.querySelectorAll('.mobile-submenu > li > a');
    mobileSubmenuLinks.forEach(link => {
        // Check if this link belongs to a menu item with submenu
        const parentLi = link.closest('li');
        if (parentLi) {
            // Check if parent li has a direct child submenu
            const hasSubmenu = parentLi.classList.contains('mobile-menu-item') && 
                               Array.from(parentLi.children).some(child => child.classList.contains('mobile-submenu'));
            
            if (!hasSubmenu) {
                // This is a regular link without submenu - close menu on click
                link.addEventListener('click', () => {
                    closeMobileMenu();
                });
            }
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
            closeMobileMenu();
        }
    });

    // Desktop menu toggle (legacy)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('is-open');
        });
    }

    // Render homepage news from NEWS_DATA if present (featured + carousel)
    try {
        const featuredWrap = document.querySelector('.news-featured');
        const carousel = document.querySelector('.news-carousel');
        const track = document.querySelector('.news-columns-track');
        const prevNewsBtn = document.querySelector('.news-arrow--prev');
        const nextNewsBtn = document.querySelector('.news-arrow--next');

        if (featuredWrap && carousel && track && Array.isArray(window.NEWS_DATA) && window.NEWS_DATA.length) {
            const getColumnsPerView = () => {
                const width = window.innerWidth;
                if (width >= 1600) return 5;
                if (width >= 1280) return 4;
                if (width >= 1024) return 3;
                if (width >= 768) return 2;
                return 1;
            };
            const [featured, ...rest] = window.NEWS_DATA;

            const renderCard = (data) => {
                const card = document.createElement('article');
                card.className = 'news-card';
                card.innerHTML = `
                    <a href="news/${data.slug}.html" class="news-media" aria-hidden="true" tabindex="-1">
                        <img src="${data.image}" alt="" loading="lazy">
                        <time class="news-date-overlay" datetime="${data.dateISO || ''}">${data.dateText || ''}</time>
                    </a>
                    <div class="news-body">
                        <a href="news/${data.slug}.html" class="news-title">${data.title}</a>
                    </div>
                `;
                return card;
            };

            if (featured) {
                featuredWrap.innerHTML = '';
                const card = document.createElement('article');
                card.className = 'featured-card';
                card.innerHTML = `
                    <a href="news/${featured.slug}.html" class="featured-media" aria-hidden="true" tabindex="-1">
                        <img src="${featured.image}" alt="" loading="lazy">
                        <time class="news-date-overlay" datetime="${featured.dateISO || ''}">${featured.dateText || ''}</time>
                    </a>
                    <div class="featured-body">
                        <a href="news/${featured.slug}.html" class="news-title">${featured.title}</a>
                        <div class="featured-footer">
                            <div class="featured-socials" aria-label="Социальные сети">
                                <a class="icon-btn" href="#" aria-label="Telegram" title="Telegram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 3.5L2.8 11.1c-.8.3-.8 1.4 0 1.7l4.5 1.8 1.7 5c.3.8 1.4.9 1.8.2l2.6-3.6 4.8 3.7c.6.5 1.5.1 1.7-.6l3-16.1c.2-.8-.6-1.5-1.4-1.1z" fill="currentColor"/></svg>
                                </a>
                                <a class="icon-btn" href="#" aria-label="VK" title="VK">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7c.2 5.2 2.8 9.2 7.6 9.2h.4v-3.3c2 .2 3.5 1.6 4.1 3.3H19c-.8-2.4-2.5-3.8-3.9-4.4 1.4-.8 3.2-2.7 3.6-4.8h-3.1c-.5 1.9-1.9 3.7-3.3 3.8V7H9.2v7.8C7.6 14.5 6.7 12.1 6.6 7H3z" fill="currentColor"/></svg>
                                </a>
                                <a class="icon-btn" href="#" aria-label="OK" title="OK">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a4 4 0 110 8 4 4 0 010-8zm0 6.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm4.6 5.6c.5.5.5 1.2 0 1.7l-1 .9c-1.2-1-2.5-1.4-3.6-1.4s-2.4.4-3.6 1.4l-1-.9c-.5-.5-.5-1.2 0-1.7 1.6-1.2 3.3-1.8 4.6-1.8s3 .6 4.6 1.8zm-4.6 2.5c1.1 0 2.4.4 3.6 1.4l-1 .9c-.5.5-1.2.5-1.7 0l-.9-.9-.9.9c-.5.5-1.2.5-1.7 0l-1-.9c1.2-1 2.5-1.4 3.6-1.4z" fill="currentColor"/></svg>
                                </a>
                            </div>
                            <a class="featured-more" href="news/archive.html">Все новости >></a>
                        </div>
                    </div>
                `;
                featuredWrap.appendChild(card);
            }

            const latest = rest.slice(0, 20);
            track.innerHTML = '';
            for (let i = 0; i < latest.length; i += 2) {
                const column = document.createElement('div');
                column.className = 'news-column';
                latest.slice(i, i + 2).forEach(item => column.appendChild(renderCard(item)));
                track.appendChild(column);
            }

            let columnsPerView = getColumnsPerView();
            let currentIndex = 0;

            const getColumns = () => Array.from(track.children);
            const getMaxIndex = () => Math.max(0, getColumns().length - columnsPerView);

            const updateButtons = () => {
                const maxIndex = getMaxIndex();
                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }
                carousel.style.setProperty('--columns-per-view', columnsPerView);
                carousel.style.setProperty('--current-index', currentIndex);
                if (prevNewsBtn) {
                    prevNewsBtn.disabled = currentIndex === 0;
                }
                if (nextNewsBtn) {
                    nextNewsBtn.disabled = currentIndex >= maxIndex;
                }
            };

            const syncHeights = () => {
                const featuredCard = featuredWrap.querySelector('.featured-card');
                const columns = getColumns();
                if (!featuredCard || !columns.length) return;

                if (window.innerWidth <= 920) {
                    featuredCard.style.height = '';
                    carousel.style.height = '';
                    columns.forEach(col => {
                        col.style.height = '';
                        Array.from(col.children).forEach(card => {
                            card.style.flex = '';
                        });
                    });
                    return;
                }

                // Высота карусели определяется самой высокой колонкой
                let maxColumnHeight = 0;
                columns.forEach(col => {
                    const colHeight = col.getBoundingClientRect().height;
                    if (colHeight > maxColumnHeight) {
                        maxColumnHeight = colHeight;
                    }
                });

                if (maxColumnHeight > 0) {
                    const targetHeight = maxColumnHeight;
                    carousel.style.height = `${targetHeight}px`;
                    featuredCard.style.height = `${targetHeight}px`;
                    columns.forEach(col => {
                        col.style.height = `${targetHeight}px`;
                        Array.from(col.children).forEach(card => {
                            card.style.flex = '1 1 auto';
                        });
                    });
                }
            };

            const handleResize = () => {
                columnsPerView = getColumnsPerView();
                updateButtons();
                syncHeights();
            };

            prevNewsBtn?.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    updateButtons();
                }
            });

            nextNewsBtn?.addEventListener('click', () => {
                const maxIndex = getMaxIndex();
                if (currentIndex < maxIndex) {
                    currentIndex += 1;
                    updateButtons();
                }
            });

            handleResize();

            window.addEventListener('resize', handleResize);
            if (window.ResizeObserver) {
                const observer = new ResizeObserver(() => {
                    // Небольшая задержка для завершения рендеринга
                    setTimeout(syncHeights, 50);
                });
                const trackEl = track;
                if (trackEl) observer.observe(trackEl);
                const featuredCard = featuredWrap.querySelector('.featured-card');
                if (featuredCard) observer.observe(featuredCard);
            }
            
            // Синхронизация после загрузки изображений
            setTimeout(syncHeights, 300);
        }
    } catch(e) {
        console.error('Error rendering news:', e);
    }

    // Simple slider
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        const slides = Array.from(slider.querySelectorAll('.slide'));
        const prevBtn = slider.querySelector('.slider-control.prev');
        const nextBtn = slider.querySelector('.slider-control.next');
        const slidesWrap = slider.querySelector('.slides');
        let index = Math.max(0, slides.findIndex(s => s.classList.contains('is-active')));
        const intervalMs = Number(slidesWrap?.getAttribute('data-interval')) || 6000;
        let timer;

        function show(i) {
            slides.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
            index = i;
        }
        function next() { show((index + 1) % slides.length); }
        function prev() { show((index - 1 + slides.length) % slides.length); }

        nextBtn?.addEventListener('click', next);
        prevBtn?.addEventListener('click', prev);

        if (slidesWrap?.getAttribute('data-autoplay') === 'true' && slides.length > 1) {
            timer = setInterval(next, intervalMs);
            slider.addEventListener('mouseenter', () => clearInterval(timer));
            slider.addEventListener('mouseleave', () => { timer = setInterval(next, intervalMs); });
        }
    }
});


