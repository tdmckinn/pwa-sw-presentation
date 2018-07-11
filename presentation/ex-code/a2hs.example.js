export const a2hsEx = `
  let installPromptEvent;
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPromptEvent = event;
    document.querySelector('#install-button').disabled = false;
  });

  btnInstall.addEventListener('click', () => {
    document.querySelector('#install-button').disabled = true;
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      installPromptEvent = null;
    });
  });
`;
