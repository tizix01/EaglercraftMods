// On attend que le DOM soit complètement chargé
window.onload = function () {

  var browserling = new BrowserlingIframe({
    session: "Pt1MXZ9cSJt+Nk5JOpmVG/GwPxktcScKw...", // Remplace par ton token valide
    platform: "win/10",
    browser: "chrome/127", // Tor Browser, version 13
    url: "youtube.com" // Le site à ouvrir dans Tor
  });

  // Récupère le div et injecte l'iframe du navigateur
  var div = document.getElementById('browserling');
  div.appendChild(browserling.iframe());
};

