const weddingDate = new Date('2026-07-11T14:00:00+03:00');
const ids = ['days','hours','minutes','seconds'];
function tick(){
  const diff = Math.max(0, weddingDate - new Date());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  [d,h,m,s].forEach((value, i) => {
    document.getElementById(ids[i]).textContent = String(value).padStart(2,'0');
  });
}
tick();
setInterval(tick, 1000);
