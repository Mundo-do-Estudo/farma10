
(function(){
  'use strict';

  /* ==========================================================
     CONFIGURAÇÕES — WhatsApp por loja
     ========================================================== */
  const WHATSAPP   = '5511971766026';   // ← Loja 1 (Farma10) — usado por padrão
  const IFOOD      = 'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f';
  const INSTAGRAM1 = 'https://www.instagram.com/drogaria_farma10';
  const INSTAGRAM2 = 'https://www.instagram.com/drogarianova_mogi';

  const REVIEW1 = 'https://www.google.com.br/maps/place/Farma+10/@-23.5493447,-46.2519953,865m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ce7774dc780345:0x254032e0b1fce4f8!8m2!3d-23.5493496!4d-46.2494204!16s%2Fg%2F11z5tghvbr';
  const REVIEW2 = 'https://www.google.com.br/maps/place/Drogaria+Nova+Mogi/@-23.5517192,-46.2451501,865m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94ce77dccf14675f:0x95406ceedd7d861c!8m2!3d-23.5517241!4d-46.2425752!16s%2Fg%2F11lcllvr8d';

  const LOJAS = {
    loja1: {
      nome:      'Farma10 — Jundiapeba',
      tag:       'Loja 1',
      endereco:  'R. Profa. Lucinda Bastos, 1246 — Jundiapeba, Mogi das Cruzes / SP',
      whatsapp:  '(11) 97176-6026',
      waNumber:  '5511971766026',
      telefone2: '(11) 4729-5132',
      instagram: '@drogaria_farma10',
      instagramUrl: INSTAGRAM1,
      ifood:     IFOOD,
      review:    REVIEW1,
      route:     'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('R. Profa. Lucinda Bastos, 1246 - Jundiapeba, Mogi das Cruzes - SP'),
      embed:     'https://www.google.com/maps?q=' + encodeURIComponent('R. Profa. Lucinda Bastos, 1246 - Jundiapeba, Mogi das Cruzes - SP') + '&z=17&output=embed'
    },
    loja2: {
      nome:      'Drogaria Nova Mogi',
      tag:       'Loja 2',
      endereco:  'R. Pedro Paulo dos Santos, 471 — Jundiapeba, Mogi das Cruzes / SP — CEP 08750-053',
      whatsapp:  '+55 11 91950-0661',
      waNumber:  '5511919500661',
      telefone2: '',
      instagram: '@drogarianova_mogi',
      instagramUrl: INSTAGRAM2,
      ifood:     null,
      review:    REVIEW2,
      route:     'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('R. Pedro Paulo dos Santos, 471 - Jundiapeba, Mogi das Cruzes - SP, 08750-053'),
      embed:     'https://www.google.com/maps?q=' + encodeURIComponent('Drogaria Nova Mogi, R. Pedro Paulo dos Santos, 471 - Jundiapeba, Mogi das Cruzes - SP, 08750-053') + '&z=17&output=embed'
    }
  };

  /* ==========================================================
     PRODUTOS EM PROMOÇÃO
     ========================================================== */
  const CATEGORIAS = {
    todos:        'Todos',
    medicamentos: 'Medicamentos',
    higiene:      'Higiene',
    beleza:       'Beleza',
    vitaminas:    'Vitaminas',
    bebe:         'Bebê'
  };

 const PRODUTOS = [
  { nome:'Dipirona 500mg', desc:'Analgésico e antitérmico — caixa com 20 comprimidos', preco:5.23,  antigo:12.90, cat:'medicamentos', tag:'Mais vendido',
    img:'https://dmvfarma.vtexassets.com/arquivos/ids/170232/7895296210959_1.jpg?v=637598049827100000',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=dipirona&item=b9702858-4fa7-4b52-a23d-e2f167462879' },

  { nome:'Tyflen – Paracetamol 500mg Com 20 Comprimidos – Braste', desc:'Alívio de dores e febre — caixa com 20 comprimidos', preco:11.62,  antigo:15.90, cat:'medicamentos',
    img:'https://d16oedezm6qviu.cloudfront.net/Custom/Content/Products/54/95/54956_89494-tyflen-500mg-brasterapica-caixa-com-20-comprimidos_l2_638890416199256377.webp',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=paracetamol&item=ea43b956-d7c1-4371-8040-01795d8826dd' },

  { nome:'Álcool Gel Farmax Neutro Embalagem 50g', desc:'Antisséptico 50g — higienização das mãos', preco:8.13,  antigo:14.90, cat:'higiene',      tag:'Oferta',
    img:'https://farmaxoficial1.vtexassets.com/arquivos/ids/156005/image1.jpg?v=638003962232070000',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f' },

  { nome:'Protetor Solar Facial', desc:'Fps 70 Cor Bege Claro Helioderm 50g', preco:45.34, antigo:59.90, cat:'beleza',
    img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTx48FPNjCddUQcdrs9nPYnpaPbqub1ewjbOItW-pR3EomdxHr4wm_mUNlrKH7QHyn7ePaUzFQ72p8y9C9FvhfIJQmH2z5vk_OwC6SSdtn5Q4pkjzSR5kLnL_Yc4ll8wnrptWxzj04&usqp=CAc',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=protetor+solar&item=71c0601c-67e5-4b1a-bf30-e58b483c04f6' },

  { nome:'Vitamina C 1g', desc:'Vitamina C Efervescente Geovit 10un', preco:11.62, antigo:24.90, cat:'vitaminas',    tag:'Imunidade',
    img:'https://http2.mlstatic.com/D_NQ_NP_934884-MLB108906839428_032026-O.webp',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=vitamina+c&item=f0afd1dc-f765-4a3c-a6c6-430e33698bbf' },

  { nome:'Fralda Personal M', desc:'Jumbo M 26un', preco:22.38, antigo:32.90, cat:'bebe',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQ0ref-nxdle3Mlc7RSxNET_RDDhV0UijgasspMUN-TexcGDpkiyIo4E&s=10',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=fralda&item=ede1e7a8-5186-4643-aa23-0d9620b3d30a' },

  { nome:'Omeprazol 20mg', desc:'Omeprazol 20mg 56 Cápsulas Globo Genérico', preco:18.56, antigo:29.90, cat:'medicamentos',
    img:'https://arquivos.solfarma.com.br/loja/imagens/produto/grande/0000018191_000.png?v=1790626961000',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=omeprazol&item=406651b9-6f74-429e-b41e-06080496b730' },

  { nome:'Shampoo Darling', desc:'Shampoo E Condicionador 2 Em 1 Darling 350ml', preco:16.27, antigo:27.90, cat:'higiene',      tag:'Oferta',
    img:'https://http2.mlstatic.com/D_NQ_NP_861199-MLA114453158631_072026-O.webp',
    link:'https://www.ifood.com.br/delivery/mogi-das-cruzes-sp/drogaria-farma10-jundiapeba/8c605a07-0788-4984-bb47-7ee02f25854f?buscar=shampoo&item=26645d81-c82a-4843-b711-81a77fa3ad68' }
];

  /* ==========================================================
     UTILITÁRIOS
     ========================================================== */
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const brl = n => n.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
  const waLink = msg => 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);

  /* ==========================================================
     TEMA
     ========================================================== */
  const html = document.documentElement;
  const themeToggle = $('#themeToggle');
  const metaTheme = $('meta[name="theme-color"]');

  function applyTheme(theme){
    html.setAttribute('data-theme', theme);
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#060608' : '#e11d2a');
    try { localStorage.setItem('farma10-theme', theme); } catch(e){}
  }

  let saved = null;
  try { saved = localStorage.getItem('farma10-theme'); } catch(e){}
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  themeToggle && themeToggle.addEventListener('click', function(){
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    this.animate(
      [{ transform:'scale(1)' }, { transform:'scale(.86)' }, { transform:'scale(1)' }],
      { duration: 320, easing:'cubic-bezier(.16,1,.3,1)' }
    );
  });

  /* ==========================================================
     HEADER / MENU / PROGRESSO
     ========================================================== */
  const header    = $('#header');
  const hamburger = $('#hamburger');
  const nav       = $('#nav');
  const progress  = $('#progress');
  const toTop     = $('#toTop');

  function onScroll(){
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', y > 10);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    toTop.classList.toggle('is-visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  function closeMenu(){
    nav.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger && hamburger.addEventListener('click', function(){
    const open = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  $$('.nav__link').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });
  toTop && toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* ==========================================================
     SCROLL SPY
     ========================================================== */
  const sections = $$('main section[id]');
  const navLinks = $$('.nav__link');

  function setActiveLink(id){
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
  }

  if ('IntersectionObserver' in window){
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) setActiveLink(en.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ==========================================================
     REVEAL
     ========================================================== */
  let revealObserver = null;
  function initReveal(){
    if (!('IntersectionObserver' in window)){
      $$('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting){
          en.target.classList.add('is-visible');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    $$('.reveal').forEach(el => revealObserver.observe(el));
  }
  initReveal();

  /* ==========================================================
     CONTADOR
     ========================================================== */
  function animateCount(el){
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('pt-BR') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = $$('[data-count]');
  if ('IntersectionObserver' in window && counters.length){
    const cObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting){ animateCount(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => cObs.observe(c));
  } else {
    counters.forEach(c => c.textContent = c.dataset.count + (c.dataset.suffix || ''));
  }

  /* ==========================================================
     PRODUTOS
     ========================================================== */
  const filtersEl  = $('#filters');
  const productsEl = $('#products');
  let filtroAtual  = 'todos';

  function renderFilters(){
    if (!filtersEl) return;
    filtersEl.innerHTML = Object.keys(CATEGORIAS).map(key =>
      '<button class="chip' + (key === filtroAtual ? ' is-active' : '') + '" ' +
      'type="button" role="tab" data-cat="' + key + '" ' +
      'aria-selected="' + (key === filtroAtual) + '">' +
      CATEGORIAS[key] + '</button>'
    ).join('');
  }

  function renderProducts(){
    if (!productsEl) return;
    const lista = PRODUTOS.filter(p => filtroAtual === 'todos' || p.cat === filtroAtual);

    if (!lista.length){
      productsEl.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:2rem 0">' +
        'Nenhuma promoção nesta categoria no momento. Fale com a gente no WhatsApp!</p>';
      return;
    }

    productsEl.innerHTML = lista.map((p, i) => {
      const desconto = Math.round((1 - p.preco / p.antigo) * 100);
      const msg = 'Olá! Vi a promoção no site da Farma10 e gostaria de saber mais sobre: ' + p.nome;
      const tagBlue = p.tag && p.tag.toLowerCase().indexOf('imunidade') > -1;
      return (
        '<article class="produto reveal" style="transition-delay:' + (i % 4) * 70 + 'ms">' +
          '<div class="produto__media">' +
            '<span class="produto__tag' + (tagBlue ? ' produto__tag--blue' : '') + '">' +
              (p.tag ? p.tag : '-' + desconto + '%') +
            '</span>' +
            '<img src="' + p.img + '" alt="' + p.nome + ' — promoção na farmácia Farma10 em Mogi das Cruzes" loading="lazy" onerror="imgFallback(this)">' +
          '</div>' +
          '<div class="produto__body">' +
            '<span class="produto__cat">' + (CATEGORIAS[p.cat] || '') + '</span>' +
            '<h3 class="produto__name">' + p.nome + '</h3>' +
            '<p class="produto__desc">' + p.desc + '</p>' +
            '<div class="produto__price">' +
              '<span class="produto__old">' + brl(p.antigo) + '</span>' +
              '<span class="produto__new">' + brl(p.preco) + '</span>' +
            '</div>' +
            '<div class="produto__actions">' +
'<a class="btn btn--primary btn--sm" href="' + (p.link || IFOOD) + '" target="_blank" rel="noopener">Comprar</a>' +              '<a class="btn btn--ghost btn--sm" href="' + waLink(msg) + '" target="_blank" rel="noopener">WhatsApp</a>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    if (revealObserver){
      $$('.produto.reveal', productsEl).forEach(el => revealObserver.observe(el));
    }
  }

  if (filtersEl){
    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      filtroAtual = btn.dataset.cat;
      $$('.chip', filtersEl).forEach(c => {
        const on = c === btn;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-selected', String(on));
      });
      renderProducts();
    });
  }

  renderFilters();
  renderProducts();

  /* ==========================================================
     ACORDEÃO DAS LOJAS
     ========================================================== */
  $$('[data-loja]').forEach(loja => {
    const toggle = $('.loja__toggle', loja);
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const open = loja.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      const label = $('span', toggle);
      if (label) label.textContent = open ? 'Ocultar detalhes' : 'Ver endereço e contato';
    });
  });

  /* ==========================================================
     MAPA + PAINEL DINÂMICO
     ========================================================== */
  const mapFrame       = $('#mapFrame');
  const mapTabs        = $$('.map-tab');
  const mapInfoName    = $('#mapInfoName');
  const mapInfoAddr    = $('#mapInfoAddr');
  const mapInfoMeta    = $('#mapInfoMeta');
  const mapInfoActions = $('#mapInfoActions');

  function esc(str){
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function setMap(key){
    const loja = LOJAS[key];
    if (!loja) return;

    /* Mapa */
    if (mapFrame) mapFrame.src = loja.embed;

    /* Nome + tag */
    if (mapInfoName){
      mapInfoName.innerHTML = esc(loja.nome) +
        ' <span class="tag">' + esc(loja.tag) + '</span>';
    }

    /* Endereço */
    if (mapInfoAddr){
      mapInfoAddr.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' +
        '</svg>' +
        '<span>' + esc(loja.endereco) + '</span>';
    }

    /* Meta */
    if (mapInfoMeta){
      let meta = '<span><strong>WhatsApp:</strong> ' + esc(loja.whatsapp) + '</span>';
      if (loja.telefone2){
        meta += '<span><strong>Telefone:</strong> ' + esc(loja.telefone2) + '</span>';
      }
      meta += '<span><strong>Instagram:</strong> ' + esc(loja.instagram) + '</span>';
      mapInfoMeta.innerHTML = meta;
    }

    /* Ações — usa loja.waNumber */
    if (mapInfoActions){
      const waMsg  = 'Olá! Vim pelo site da Farma10 e gostaria de falar com a loja ' + loja.nome + '.';
      const waHref = 'https://wa.me/' + loja.waNumber + '?text=' + encodeURIComponent(waMsg);

      let html = '';
      html += '<a class="btn btn--primary btn--sm" href="' + waHref + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/></svg>' +
        ' WhatsApp</a>';

      html += '<a class="btn btn--ghost btn--sm" href="' + loja.instagramUrl + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>' +
        ' Instagram</a>';

      if (loja.ifood){
        html += '<a class="btn btn--blue btn--sm" href="' + loja.ifood + '" target="_blank" rel="noopener">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8v6a4 4 0 0 0 4 4h.5a1.5 1.5 0 0 0 0-3H8a1 1 0 0 1-1-1v-6a5 5 0 0 1 10 0v6a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 0 0 3h.5a4 4 0 0 0 4-4v-6a8 8 0 0 0-8-8z"/></svg>' +
          ' iFood</a>';
      }

      html += '<a class="btn btn--ghost btn--sm" href="' + loja.review + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>' +
        ' Avalie-nos</a>';

      html += '<a class="btn btn--ghost btn--sm btn--full" href="' + loja.route + '" target="_blank" rel="noopener">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-8-8 19-2-9-9-2z"/></svg>' +
        ' Traçar rota</a>';

      mapInfoActions.innerHTML = html;
    }

    /* Tabs */
    mapTabs.forEach(t => t.classList.toggle('is-active', t.dataset.map === key));
  }

  mapTabs.forEach(tab => {
    tab.addEventListener('click', () => setMap(tab.dataset.map));
  });

  if (mapFrame) setMap('loja1');

  /* ==========================================================
     FAQ ACORDEÃO
     ========================================================== */
  $$('.faq__item').forEach(item => {
    const btn = $('.faq__q', item);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* ==========================================================
     ANO FOOTER
     ========================================================== */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================
     SCROLL SUAVE
     ========================================================== */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior:'smooth' });
      closeMenu();
    });
  });

})();