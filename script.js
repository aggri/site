/* ═══════════════════════════════════════════════
   DC UNIVERSE — JAVASCRIPT
   Gestione personaggi, navigazione, scroll,
   touch, tastiera, modali, hamburger
═══════════════════════════════════════════════ */

'use strict';

/* ── DATI PERSONAGGI ──────────────────────────── */
const CHARACTERS = [
  {
    name: 'Joker',
    subtitle: 'Published By DC',
    powerTitle: 'Power',
    powers: 'Complete Unpredictability, Chaos Agent,\nCustomized Weapons, Wields Toxin\nWhich Causes Victims To Die Laughing',
    badge1: 'Intelligence',
    badge2: 'Unpredictability',
    image: 'joker.jpg',
    icon: iconJoker,
  },
  {
    name: 'Batman',
    subtitle: 'The Dark Knight',
    powerTitle: 'Abilities',
    powers: 'Peak Human Physique, Master of 127\nMartial Arts, World\'s Greatest Detective,\nBillionaire Tactical Genius',
    badge1: 'Vigilante',
    badge2: 'Detective',
    image: 'batman.jpg',
    icon: iconBatman,
  },
  {
    name: 'Bane',
    subtitle: 'The Man Who Broke Batman',
    powerTitle: 'Power',
    powers: 'Superhuman Strength via Venom,\nMaster Tactician & Strategist,\nIndomitable Will, Combat Mastery',
    badge1: 'Venom Power',
    badge2: 'Combat Master',
    image: 'bane.jpg',
    icon: iconBane,
  },
  {
    name: 'Riddler',
    subtitle: 'The Prince of Puzzles',
    powerTitle: 'Intellect',
    powers: 'Genius-Level IQ, Master of Traps\n& Psychological Warfare, Engineering\nExpert, Cryptography Specialist',
    badge1: 'IQ: 192',
    badge2: 'Trap Master',
    image: 'riddler.jpg',
    icon: iconRiddler,
  },
  {
    name: 'Catwoman',
    subtitle: 'The Feline Fatale',
    powerTitle: 'Skills',
    powers: 'Master Thief & Acrobat,\nExpert Hand-to-Hand Combat,\nWhip Proficiency, Enhanced Agility',
    badge1: 'Agility',
    badge2: 'Stealth',
    image: 'catwoman.jpg',
    icon: iconCatwoman,
  },
];

/* ── ICONE SVG ────────────────────────────────── */
function iconJoker() {
  return `<svg viewBox="0 0 56 56" width="42" height="42" fill="none">
    <ellipse cx="28" cy="26" rx="20" ry="18" fill="#1a1a1a"/>
    <path d="M18 21 Q21 16.5 24 21" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M32 21 Q35 16.5 38 21" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M18 32 Q28 43 38 32" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M18 28 Q15 32 18 36" stroke="white" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M38 28 Q41 32 38 36" stroke="white" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  </svg>`;
}
function iconBatman() {
  return `<svg viewBox="0 0 56 56" width="42" height="42" fill="none">
    <ellipse cx="28" cy="32" rx="19" ry="13" fill="#1a1a1a"/>
    <path d="M9 32 C9 18 18 12 28 12 C38 12 47 18 47 32"
          fill="#1a1a1a" stroke="none"/>
    <path d="M9 32 C4 26 2 20 9 14 L16 22" fill="#1a1a1a"/>
    <path d="M47 32 C52 26 54 20 47 14 L40 22" fill="#1a1a1a"/>
    <ellipse cx="20" cy="14" rx="5" ry="7" fill="#1a1a1a" transform="rotate(-20 20 14)"/>
    <ellipse cx="36" cy="14" rx="5" ry="7" fill="#1a1a1a" transform="rotate(20 36 14)"/>
    <path d="M20 38 Q28 44 36 38" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  </svg>`;
}
function iconBane() {
  return `<svg viewBox="0 0 56 56" width="42" height="42" fill="none">
    <ellipse cx="28" cy="26" rx="18" ry="17" fill="#1a1a1a"/>
    <rect x="14" y="26" width="28" height="13" rx="6" fill="#333"/>
    <line x1="20" y1="37" x2="16" y2="44" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="28" y1="39" x2="28" y2="46" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="36" y1="37" x2="40" y2="44" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="21" cy="19" r="4" fill="white" opacity=".15"/>
    <circle cx="35" cy="19" r="4" fill="white" opacity=".15"/>
    <path d="M20 22 Q28 25 36 22" stroke="white" stroke-width="1" fill="none" opacity=".4"/>
  </svg>`;
}
function iconRiddler() {
  return `<svg viewBox="0 0 56 56" width="42" height="42" fill="none">
    <circle cx="28" cy="28" r="20" fill="#1a1a1a"/>
    <text x="50%" y="47%" dominant-baseline="middle" text-anchor="middle"
          font-family="Inter,sans-serif" font-weight="900" font-size="26" fill="white">?</text>
  </svg>`;
}
function iconCatwoman() {
  return `<svg viewBox="0 0 56 56" width="42" height="42" fill="none">
    <ellipse cx="28" cy="30" rx="17" ry="14" fill="#1a1a1a"/>
    <ellipse cx="18" cy="16" rx="6" ry="9" fill="#1a1a1a" transform="rotate(-15 18 16)"/>
    <ellipse cx="38" cy="16" rx="6" ry="9" fill="#1a1a1a" transform="rotate(15 38 16)"/>
    <path d="M20 32 Q24 36 28 33 Q32 36 36 32" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
    <circle cx="21" cy="26" r="3" fill="white" opacity=".2"/>
    <circle cx="35" cy="26" r="3" fill="white" opacity=".2"/>
    <line x1="18" y1="29" x2="8" y2="27" stroke="white" stroke-width="1" opacity=".5"/>
    <line x1="38" y1="29" x2="48" y2="27" stroke="white" stroke-width="1" opacity=".5"/>
  </svg>`;
}

/* ── CONTENUTO MODALI ─────────────────────────── */
const PANEL_CONTENT = {
  movie: `
    <h2 class="panel-title">DC Universe Films</h2>
    <p class="panel-subtitle">Il cinema che ha ridefinito i supereroi</p>
    <div class="panel-divider"></div>
    <div class="movie-grid">
      <div class="movie-card">
        <div class="movie-badge">DC<br/>2019</div>
        <div class="movie-info">
          <h3>Joker</h3>
          <p>L'origine del Principe del Crimine di Gotham. Un capolavoro psicologico diretto da Todd Phillips.</p>
          <div class="movie-year">Regia: Todd Phillips · Joaquin Phoenix</div>
        </div>
      </div>
      <div class="movie-card">
        <div class="movie-badge">DC<br/>2022</div>
        <div class="movie-info">
          <h3>The Batman</h3>
          <p>Un Dark Knight tormentato affronta la corruzione di Gotham in un noir mozzafiato.</p>
          <div class="movie-year">Regia: Matt Reeves · Robert Pattinson</div>
        </div>
      </div>
      <div class="movie-card">
        <div class="movie-badge">DC<br/>2012</div>
        <div class="movie-info">
          <h3>The Dark Knight Rises</h3>
          <p>La conclusione epica della trilogia Nolan. Bane porta Gotham sull'orlo dell'abisso.</p>
          <div class="movie-year">Regia: Christopher Nolan · Christian Bale</div>
        </div>
      </div>
      <div class="movie-card">
        <div class="movie-badge">DC<br/>2008</div>
        <div class="movie-info">
          <h3>The Dark Knight</h3>
          <p>Il Cavaliere Oscuro contro il Joker di Heath Ledger. Considerato il miglior film di supereroi mai realizzato.</p>
          <div class="movie-year">Regia: Christopher Nolan · Heath Ledger</div>
        </div>
      </div>
    </div>`,

  about: `
    <h2 class="panel-title">About DC Comics</h2>
    <p class="panel-subtitle">Oltre 85 anni di leggende tra carta e schermo</p>
    <div class="panel-divider"></div>
    <p class="about-text">DC Comics, fondata nel 1934, è una delle più grandi e iconiche case editrici di fumetti al mondo. Sede dei personaggi più riconoscibili della cultura pop — da Superman a Batman, da Wonder Woman al Joker — DC ha plasmato l'immaginario collettivo di generazioni intere.</p>
    <br/>
    <div class="about-grid">
      <div class="about-stat">
        <span class="about-stat-num">10K+</span>
        <span class="about-stat-label">Personaggi nell'universo DC, dai supereroi ai villain più memorabili</span>
      </div>
      <div class="about-stat">
        <span class="about-stat-num">85+</span>
        <span class="about-stat-label">Anni di storie pubblicate, dal 1934 ad oggi</span>
      </div>
      <div class="about-stat">
        <span class="about-stat-num">$B</span>
        <span class="about-stat-label">Miliardi di dollari generati tra fumetti, film, serie TV e merchandise</span>
      </div>
    </div>`,

  blog: `
    <h2 class="panel-title">DC Latest</h2>
    <p class="panel-subtitle">Notizie, analisi e aggiornamenti dall'universo DC</p>
    <div class="panel-divider"></div>
    <div class="blog-list">
      <div class="blog-card">
        <div class="blog-tag">Cinema</div>
        <h3>Joker: Folie à Deux — L'eredità del Chaos</h3>
        <p>Come il sequel ha ridefinito le aspettative sul franchise del Principe del Crimine e il futuro dei villain DC.</p>
        <div class="blog-date">28 Giugno 2026</div>
      </div>
      <div class="blog-card">
        <div class="blog-tag">Fumetti</div>
        <h3>Batman: Year One — 40 anni dopo</h3>
        <p>L'arco narrativo di Frank Miller che ha trasformato per sempre la mitologia del Cavaliere Oscuro.</p>
        <div class="blog-date">24 Giugno 2026</div>
      </div>
      <div class="blog-card">
        <div class="blog-tag">Analisi</div>
        <h3>I villain DC più potenti di tutti i tempi</h3>
        <p>Dal Joker a Darkseid: un ranking definitivo dei nemici che hanno sfidato l'intero universo DC.</p>
        <div class="blog-date">20 Giugno 2026</div>
      </div>
      <div class="blog-card">
        <div class="blog-tag">Annunci</div>
        <h3>Il nuovo Riddler è in arrivo</h3>
        <p>DC Studios annuncia un reboot standalone dedicato al Principe dei Puzzle, con un approccio inedito.</p>
        <div class="blog-date">15 Giugno 2026</div>
      </div>
    </div>`,
};

/* ── APP STATE ────────────────────────────────── */
let current = 0;
let isAnimating = false;
let overlayOpen = false;
let mobileNavOpen = false;

/* ── DOM REFS ─────────────────────────────────── */
const $$ = id => document.getElementById(id);
const charName     = $$('char-name');
const charSubtitle = $$('char-subtitle');
const powerTitle   = $$('power-title');
const powerText    = $$('power-text');
const charInfo     = $$('char-info');
const badgeTop     = $$('badge-top');
const badgeBot     = $$('badge-bot');
const badgeTopLbl  = $$('badge-top-label');
const badgeBotLbl  = $$('badge-bot-label');
const numCurrent   = $$('num-current');
const charIcon     = $$('char-icon');
const watermark    = $$('watermark');
const allDots      = document.querySelectorAll('.sidebar-dots .dot');
const allMobileDots= document.querySelectorAll('.mobile-nav-dots .dot');
const allImgs      = document.querySelectorAll('.char-img');
const overlay      = $$('overlay');
const overlayBody  = $$('overlay-body');
const overlayClose = $$('overlay-close');
const mobileNav    = $$('mobile-nav');
const hamburger    = $$('hamburger');
const mobileNavClose = $$('mobile-nav-close');
const scrollBtn    = $$('scroll-btn');

/* ── INIT ─────────────────────────────────────── */
function init() {
  applyCharacter(0, false);
  bindNav();
  bindDots();
  bindScroll();
  bindTouch();
  bindKeyboard();
  bindOverlay();
  bindMobileNav();
}

/* ── CHANGE CHARACTER ─────────────────────────── */
function goTo(idx, direction) {
  if (isAnimating || idx === current) return;
  isAnimating = true;

  const prev = current;
  current = idx;

  // Fade out content
  charInfo.classList.add('fade-out');
  badgeTop.classList.add('hidden');
  badgeBot.classList.add('hidden');

  // After brief pause → swap image & content
  setTimeout(() => {
    // Swap images
    allImgs[prev].classList.remove('active');
    allImgs[current].classList.add('active');

    // Update content
    applyCharacter(current, true);

    // Fade in content
    charInfo.classList.remove('fade-out');
    charInfo.classList.add('fade-in');

    setTimeout(() => {
      charInfo.classList.remove('fade-in');
      badgeTop.classList.remove('hidden');
      badgeBot.classList.remove('hidden');
      isAnimating = false;
    }, 450);
  }, 250);
}

function applyCharacter(idx, animated) {
  const c = CHARACTERS[idx];

  // Text
  charName.textContent     = c.name;
  charSubtitle.textContent = c.subtitle;
  powerTitle.textContent   = c.powerTitle;
  powerText.innerHTML      = c.powers.replace(/\n/g, '<br/>');
  badgeTopLbl.textContent  = c.badge1;
  badgeBotLbl.textContent  = c.badge2;

  // Number
  numCurrent.textContent = String(idx + 1).padStart(2, '0');

  // Icon
  charIcon.innerHTML = c.icon();

  // Dots sync
  allDots.forEach((d, i) => {
    d.classList.toggle('active', i === idx);
    d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
  });
  allMobileDots.forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

/* ── NAVIGATION ───────────────────────────────── */
function bindNav() {
  // Desktop nav links
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.nav;

      if (section === 'home') {
        closeOverlay();
        closeMobileNav();
        goTo(0);
        setActiveNavLink('home');
      } else {
        openOverlay(section);
        setActiveNavLink(section);
        closeMobileNav();
      }
    });
  });
}

function setActiveNavLink(section) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.nav === section);
  });
}

/* ── DOTS ─────────────────────────────────────── */
function bindDots() {
  // Sidebar dots
  allDots.forEach(dot => {
    dot.addEventListener('click', () => goTo(+dot.dataset.idx));
  });
  // Mobile nav dots
  allMobileDots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(+dot.dataset.idx);
      closeMobileNav();
    });
  });
}

/* ── SCROLL (mouse wheel) ─────────────────────── */
function bindScroll() {
  let wheelCooldown = false;
  document.addEventListener('wheel', e => {
    e.preventDefault();
    if (wheelCooldown || overlayOpen || mobileNavOpen) return;
    wheelCooldown = true;
    const dir = e.deltaY > 0 ? 1 : -1;
    const next = Math.max(0, Math.min(CHARACTERS.length - 1, current + dir));
    goTo(next);
    setTimeout(() => { wheelCooldown = false; }, 700);
  }, { passive: false });

  // "Scroll Mouse" button
  scrollBtn.addEventListener('click', () => {
    const next = (current + 1) % CHARACTERS.length;
    goTo(next);
  });
}

/* ── TOUCH / SWIPE ────────────────────────────── */
function bindTouch() {
  let startY = 0;
  let startX = 0;

  document.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (overlayOpen || mobileNavOpen) return;
    const dy = startY - e.changedTouches[0].clientY;
    const dx = startX - e.changedTouches[0].clientX;
    // Require clear vertical dominance
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 50) {
      const dir = dy > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(CHARACTERS.length - 1, current + dir));
      goTo(next);
    }
  }, { passive: true });
}

/* ── KEYBOARD ─────────────────────────────────── */
function bindKeyboard() {
  document.addEventListener('keydown', e => {
    if (overlayOpen || mobileNavOpen) {
      if (e.key === 'Escape') { closeOverlay(); closeMobileNav(); }
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      const next = Math.min(CHARACTERS.length - 1, current + 1);
      goTo(next);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      const prev = Math.max(0, current - 1);
      goTo(prev);
    }
  });
}

/* ── OVERLAY PANEL ────────────────────────────── */
function bindOverlay() {
  overlayClose.addEventListener('click', closeOverlay);
  // Click on scrim (::before) closes
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });
}

function openOverlay(section) {
  overlayBody.innerHTML = PANEL_CONTENT[section] || '';
  overlay.setAttribute('aria-hidden', 'false');
  overlayOpen = true;
}

function closeOverlay() {
  overlay.setAttribute('aria-hidden', 'true');
  overlayOpen = false;
  // Reset nav highlight to home
  setTimeout(() => setActiveNavLink('home'), 350);
}

/* ── MOBILE NAV ───────────────────────────────── */
function bindMobileNav() {
  hamburger.addEventListener('click', () => {
    mobileNavOpen ? closeMobileNav() : openMobileNav();
  });
  mobileNavClose.addEventListener('click', closeMobileNav);
}

function openMobileNav() {
  mobileNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.classList.add('open');
  mobileNavOpen = true;
}

function closeMobileNav() {
  mobileNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.classList.remove('open');
  mobileNavOpen = false;
}

/* ── PARALLAX (desktop only) ──────────────────── */
const card = $$('main-card');
const heroImages = $$('hero-images');

if (window.matchMedia('(hover: hover)').matches) {
  card.addEventListener('mousemove', e => {
    if (overlayOpen) return;
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / r.width;
    const dy = (e.clientY - r.top  - r.height / 2) / r.height;
    const active = heroImages.querySelector('.char-img.active');
    if (active) {
      active.style.transform = `translateX(calc(-30% + ${dx * 14}px)) translateY(${dy * 6}px)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    const active = heroImages.querySelector('.char-img.active');
    if (active) {
      active.style.transition = 'transform .6s ease, opacity .6s';
      active.style.transform = 'translateX(-30%)';
      setTimeout(() => { active.style.transition = ''; }, 600);
    }
  });
}

/* ── CHAR ICON: click cycles character ──────────── */
charIcon.addEventListener('click', () => {
  const next = (current + 1) % CHARACTERS.length;
  goTo(next);
});

/* ── START ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);
