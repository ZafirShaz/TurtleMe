const theBody = document.querySelector('body');
        const openNav = document.querySelector('.menu-bar button');
        const closeNav = document.querySelector('.close-nav button');
        const Navbar = document.querySelector('.navbar');

        function bodyScroll(){
            if(Navbar.classList.contains('show')){
                theBody.classList.add('hide-scroll');
            }
            else if(theBody.classList.contains('hide-scroll')){
                theBody.classList.remove('hide-scroll');
            }
        }

        function showHide(){
            Navbar.classList.toggle('show');
            bodyScroll();
        }

        openNav.onclick = showHide;
        closeNav.onclick = showHide;

        // preloader
        window.addEventListener("load", function() {
          var preloader = document.getElementById("preloader");
          preloader.style.display = "none";
        });

        // swipe card 

        function handleCardClick(event) {
            const card = event.currentTarget;
            card.classList.toggle('swiped');
          }
      
          const cards = document.querySelectorAll('.card');
          cards.forEach(card => {
            card.addEventListener('click', handleCardClick);
          });

          // Slide show
          let slideIndex = 0;
          showSlides();

            function showSlides() {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

            



          