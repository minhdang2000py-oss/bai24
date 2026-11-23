// ====== SỬA 2 DÒNG NÀY ======
const TEN = 'Lê Minh Đăng';
const MSSV = '241A010202';
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const f = document.querySelector('footer');
  if (f) f.textContent = '© 2026 ' + TEN + ' - MSSV: ' + MSSV + ' - Bài tập môn Thiết kế Web';

  // Đèn kéo quân
  const lantern = document.getElementById('lantern');
  if (!lantern) return;
  const faces = lantern.querySelectorAll('.face');
  const R = 156; // bán kính = 90 / tan(30°)
  faces.forEach((face, i) => {
    face.style.transform = 'rotateY(' + (i * 60) + 'deg) translateZ(' + R + 'px)';
  });
  let angle = 0, paused = false, last = performance.now();
  const SPEED = 40; // độ / giây
  faces.forEach(face => {
    face.addEventListener('mouseenter', () => { paused = true; });
    face.addEventListener('mouseleave', () => { paused = false; });
    face.addEventListener('touchstart', () => { paused = !paused; }, { passive: true });
  });
  function tick(now) {
    const dt = (now - last) / 1000; last = now;
    if (!paused) angle = (angle + SPEED * dt) % 360;
    lantern.style.transform = 'rotateY(' + (-angle) + 'deg)';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
});
