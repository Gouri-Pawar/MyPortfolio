document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const t=document.getElementById(a.getAttribute('href').slice(1));
    if(t){ window.scrollTo({top:t.offsetTop-64, behavior:'smooth'}); }
    document.getElementById('nav').classList.remove('open');
  });
});
document.getElementById('menu-btn').addEventListener('click', ()=>{
  document.getElementById('nav').classList.toggle('open');
});

/* reveal sections as they scroll into view */
document.querySelectorAll('section > .wrap').forEach(el=>{
  if(el.closest('#hero')) return;
  el.classList.add('reveal');
});
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));