(() => {
  window.addEventListener('load', () => {
    const adjacentBtnObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          for (const adjancentBtn of getAdjacentButtons(node, '[role="button"][aria-label*="Like" i]')) {
            addBlock(adjancentBtn);
          }
        }
      }
    });
    adjacentBtnObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });

  function getAdjacentButtons(node, selector) {
    return Array.from(
      node.querySelectorAll(selector)
    ).map(adjancentBtnChild => adjancentBtnChild.parentNode);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function buildBlockBtn(adjancentBtn) {
    const blockBtn = adjancentBtn.cloneNode(true);
    blockBtn.classList.add('block');
    blockBtn.querySelector('svg').innerHTML = `<g><path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>`;
    blockBtn.querySelector('svg').closest('div').nextSibling?.remove();
    blockBtn.querySelector('div > div > div').style = '';
    blockBtn.querySelector('div').setAttribute('aria-label', 'Block');
    blockBtn.addEventListener('click', async () => {
      blockBtn.closest('article').querySelector('[role="button"][aria-label*="More"]').click();
      await sleep(0);
      document.querySelector('[role="menuitem"][data-testid="block"]').click();
      await sleep(0);
      document.querySelector('[role="button"][data-testid="confirmationSheetConfirm"]').click();
    });
    return blockBtn;
  }

  function addBlock(adjancentBtn) {
    const group = adjancentBtn.closest('[role="group"]');
    if (!group?.querySelector('.block')) {
      adjancentBtn.after(buildBlockBtn(adjancentBtn));
    }
  }
})();
