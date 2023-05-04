(() => {
  window.addEventListener('load', () => {
    const likeBtnObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.getAttribute('role') === 'button' && node.getAttribute('aria-label')?.includes('Like')) {
            addBlock(node);
          }
          for (const subnode of node.querySelectorAll('[role="button"][aria-label*="Like"')) {
            addBlock(subnode);
          }
        }
      }
    });
    likeBtnObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
    console.log('Test');
  });

  function addBlock(likeBtn) {
    if (likeBtn.parentNode.getAttribute('role') === 'group') {
      if (!likeBtn.parentNode.querySelector('.block')) {
        const blockBtn = likeBtn.cloneNode(true);
        blockBtn.classList.add('block');
        blockBtn.querySelector('svg').innerHTML = `<g><path d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"></path></g>`;
        blockBtn.querySelector('svg').closest('div').nextSibling?.remove();
        blockBtn.querySelector('div > div > div').style = '';
        blockBtn.setAttribute('aria-label', 'Block');
        blockBtn.addEventListener('click', () => {
          blockBtn.closest('article').querySelector('[role="button"][aria-label*="More"]').click();
          document.querySelector('[role="menuitem"][data-testid="block"]').click();
          document.querySelector('[role="button"][data-testid="confirmationSheetConfirm"]').click();
        });
        likeBtn.parentNode.appendChild(blockBtn);
      }
    } else if (likeBtn.parentNode) {
      addBlock(likeBtn.parentNode);
    }
  }

})();
