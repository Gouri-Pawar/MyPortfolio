document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if(targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for fixed header height
          behavior: 'smooth'
        });
      }
    });
  });

  