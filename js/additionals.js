window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('hire-banner').style.top = '0';
    } else {
      document.getElementById('hire-banner').style.top = '-50px';
    }
  };

function showBanner() {
    document.getElementById('hire-banner').style.display = 'block';
  }

  // Function to close the banner
  function closeBanner() {
    document.getElementById('hire-banner').style.display = 'none';
  }

  // Call showBanner function after a delay (e.g., 5 seconds)
  setTimeout(showBanner, 3000);