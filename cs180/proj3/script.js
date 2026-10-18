'use strict';

for (const button of document.querySelectorAll('.rotate-button')) {
  button.addEventListener('click', () => {
    const image = document.getElementById(button.getAttribute('aria-controls'));
    const rotated = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(rotated));
    image.classList.toggle('rotated', rotated);
    button.textContent = rotated ? 'Return upright ↻' : 'Rotate 180° ↻';
    const caption = button.closest('.anagram-card').querySelector('.rotation-caption');
    caption.textContent = rotated ? caption.dataset.rotated : caption.dataset.upright;
  });
}

