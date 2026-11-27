'use strict';

for (const image of document.querySelectorAll('.avatar img, .game-visual img')) {
  const onFailure = () => {
    image.hidden = true;
    image.parentElement.classList.add('is-missing');
  };
  image.addEventListener('error', onFailure, { once: true });
  if (image.complete && !image.naturalWidth) onFailure();
}

const games = [...document.querySelectorAll('.game[data-game]')];
if (games.length && typeof HTMLDialogElement !== 'undefined' && HTMLDialogElement.prototype.showModal) {
  const dialog = document.createElement('dialog');
  dialog.className = 'preview-dialog';
  dialog.setAttribute('aria-labelledby', 'preview-title');
  dialog.innerHTML = `
    <div class="preview-bar">
      <strong id="preview-title"></strong>
      <button class="preview" type="button" data-close autofocus>Fechar <span aria-hidden="true">×</span></button>
    </div>
    <div class="preview-stage">
      <img alt="">
      <p hidden>Não foi possível carregar esta imagem.</p>
    </div>
    <div class="preview-controls">
      <button class="preview" type="button" data-prev aria-label="Imagem anterior">← <span>Anterior</span></button>
      <output aria-live="polite"></output>
      <button class="preview" type="button" data-next aria-label="Próxima imagem"><span>Próxima</span> →</button>
    </div>`;
  document.body.append(dialog);

  const title = dialog.querySelector('strong');
  const stageImage = dialog.querySelector('img');
  const errorMessage = dialog.querySelector('.preview-stage p');
  const progress = dialog.querySelector('output');
  const close = dialog.querySelector('[data-close]');
  const previous = dialog.querySelector('[data-prev]');
  const next = dialog.querySelector('[data-next]');
  const slides = [1, 2];
  let currentGame;
  let index = 0;
  let opener;

  function render() {
    if (!currentGame) return;
    const number = slides[index];
    stageImage.hidden = false;
    errorMessage.hidden = true;
    stageImage.alt = `Imagem de gameplay ${number} de ${currentGame.name}`;
    stageImage.src = `../assets/${currentGame.id}/gameplay-${number}.jpg`;
    progress.textContent = `Gameplay ${index + 1} / ${slides.length}`;
  }

  function step(delta) {
    index = (index + delta + slides.length) % slides.length;
    render();
  }

  stageImage.addEventListener('error', () => {
    stageImage.hidden = true;
    errorMessage.hidden = false;
  });
  previous.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      step(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  dialog.addEventListener('close', () => {
    opener?.focus({ preventScroll: true });
    opener = undefined;
  });

  for (const game of games) {
    const name = game.querySelector('h3').textContent.trim().replace(/\s+/g, ' ');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'preview';
    button.textContent = 'Ver gameplay';
    button.setAttribute('aria-label', `Ver gameplay: ${name}`);
    button.setAttribute('aria-haspopup', 'dialog');
    game.querySelector('.game-actions').prepend(button);
    button.addEventListener('click', () => {
      opener = button;
      currentGame = { id: game.dataset.game, name };
      index = 0;
      title.textContent = name;
      render();
      dialog.showModal();
    });
  }
}
