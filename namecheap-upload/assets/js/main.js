  document.getElementById('yr').textContent = new Date().getFullYear();

  // Navbar
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 60));

  // Mobile menu
  function toggleMenu() { document.getElementById('mobMenu').classList.toggle('open'); }

  // Scroll fade-in (inkl. Fallback: bereits sichtbare Blöcke / Anker-Sprung)
  function revealFiInView() {
    document.querySelectorAll('.fi').forEach((el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('up');
    });
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('up'), i * 70);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px 8% 0px' }
  );
  document.querySelectorAll('.fi').forEach((el) => io.observe(el));
  revealFiInView();
  addEventListener('load', revealFiInView);
  addEventListener('hashchange', () => setTimeout(revealFiInView, 80));

  // Tabs
  function switchTab(id, btn) {
    document.querySelectorAll('.tb').forEach(b => b.classList.remove('on'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('tab-' + id).classList.add('on');
  }

  // Form
  function doSend(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Wird gesendet …';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('fOk').style.display = 'block';
      e.target.reset();
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg> Jetzt unverbindlich anfragen';
      btn.disabled = false;
    }, 1200);
  }
