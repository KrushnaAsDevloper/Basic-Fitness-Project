const animatedText = document.querySelector('.gym-name');
    const hiddenContent = document.getElementById('content');

    animatedText.addEventListener('animationend', () => {
      hiddenContent.classList.add('visible');
    })