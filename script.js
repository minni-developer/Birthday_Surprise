// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cakeContainer = document.getElementById('cake-container');
    const blowBtn = document.getElementById('blow-btn');
    const sendWishBtn = document.getElementById('send-wish-btn');
    const wishInput = document.getElementById('wish-input');
    const wishDisplay = document.getElementById('wish-display');
    const cards = document.querySelectorAll('.card');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const nextPageBtn = document.getElementById('nextPageBtn');
    let candlesLit = true;
    let flippedCount = 0;
  
    blowBtn.addEventListener('click', () => {
      if (candlesLit) {
        cakeContainer.classList.add('candles-off');
        blowBtn.textContent = "Candles Blown Out!";
        candlesLit = false;
        alert("Make your wish and send it!");
  
        for (let i = 0; i < 6; i++) {
          const smoke = document.createElement('div');
          smoke.className = 'smoke';
          smoke.style.left = `${30 + Math.random() * 40}%`;
          smoke.style.top = '5%';
          cakeContainer.appendChild(smoke);
          setTimeout(() => smoke.remove(), 2000);
        }
      } else {
        cakeContainer.classList.remove('candles-off');
        blowBtn.textContent = "Blow Out Candles & Make a Wish";
        candlesLit = true;
      }
    });
  
    sendWishBtn.addEventListener('click', () => {
      const wish = wishInput.value.trim();
      if (!wish) return alert("Please type your wish before sending.");
  
      const encodedWish = encodeURIComponent(wish);
      const yourEmail = "manahilsabir544@gmail.com"; // Replace with your real email address
      const mailtoLink = `mailto:${yourEmail}?subject=My%20Birthday%20Wish&body=${encodedWish}`;
      window.location.href = mailtoLink;
    });
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (!card.classList.contains('revealed')) {
          card.classList.add('revealed');
          flippedCount++;
          if (flippedCount === cards.length) launchConfetti();
        }
      });
    });
  
    nextPageBtn.addEventListener('click', () => {
      window.location.href = 'scroll.html';
    });
  
    function launchConfetti() {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  
    const overlay = document.getElementById('overlay');
    const mainPage = document.getElementById('main-page');
  
    document.getElementById('yesBtn').addEventListener('click', () => {
      document.getElementById('sarcastic-response').textContent = "Oh ye of little faith!  IDIOT🤷";
      setTimeout(() => {
        overlay.classList.add('hidden');
        mainPage.classList.remove('hidden');
      }, 2500);
    });
  
    document.getElementById('noBtn').addEventListener('click', () => {
      document.getElementById('sarcastic-response').textContent = "Good! Because I didn’t! 😎";
      setTimeout(() => {
        overlay.classList.add('hidden');
        mainPage.classList.remove('hidden');
      }, 2500);
    });
  });
  
  document.getElementById("start-button").addEventListener("click", function () {
    const music = document.getElementById("birthday-music");
    music.play().catch((e) => {
      console.log("Autoplay blocked, playing after interaction:", e);
    });
  });
  