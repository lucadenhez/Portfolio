/*!
* Start Bootstrap - New Age v6.0.5 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 
function shuffle(images, colors) {
    let currentIndex = images.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
        [images[currentIndex], images[randomIndex]] = [
            images[randomIndex], images[currentIndex]];

        [colors[currentIndex], colors[randomIndex]] = [
            colors[randomIndex], colors[currentIndex]];
    }
    return [images, colors];
}

window.addEventListener('DOMContentLoaded', event => {
    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },
        
        setupEventListeners: function() {
            var self = this;
            
            // Anchor hovering
            document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            document.getElementById('slideshow').addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });

            document.getElementById('slideshow').addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
            
            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
      
            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();
    
                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';
            });

            // Hide/show cursor
            document.addEventListener('mouseenter', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });
            
            document.addEventListener('mouseleave', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },
        
        animateDotOutline: function() {
            var self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize: function() {
            var self = this;
            
            if (self.cursorEnlarged) {
                self.$outline.style.transform = 'translate(-50%, -50%) scale(2.5)';
            } else {
                self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        },
        
        toggleCursorVisibility: function() {
            var self = this;
            
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }
    
    cursor.init();

    var frogChoices = [ 90, 178, 273, 323, 756, 873, 951, 986, 987 ];
    var frogColors = [ "#DFA460", "#88D980", "#C0EBC3", "#E89CD2", "#DFA460", "#1A3FA7", "#2AD4DF", "#1A3FA7", "#E89CD2" ];
    var shuffles = shuffle(frogChoices, frogColors);

    frogChoices = shuffles[0];
    frogColors = shuffles[1];

    var favicon = document.querySelector('link[rel="icon"]');
    favicon.href = '/assets/froggostf/frogs/' + frogChoices[0] + '.png';

    var bg = document.getElementsByClassName('masthead')[0];
    bg.style.backgroundColor = frogColors[0];
    bg.style.transition = "background-color 2s linear";

    var slideshowContainer = document.getElementById('slideshow');

    for (var i = 0; i < frogChoices.length; i++) {
        var frogLink = document.createElement('a');
        frogLink.href = '/' + frogChoices[i];
        frogLink.target = '_blank';
        var frog = document.createElement('img');
        frog.src = '/assets/froggostf/frogs/' + frogChoices[i] + '.png';
        frog.style = 'width: 100%';

        frogLink.appendChild(frog);
        slideshowContainer.appendChild(frogLink);
    }

    slideshowContainer = document.getElementById('slideshow');

    var fadeComplete = function(e) {
        slideshowContainer.appendChild(arr[0]);
        
        bg.style.backgroundColor = frogColors[frogChoices.indexOf(Number.parseInt(arr[0].href.split('/')[arr[0].href.split('/').length - 1]))];
    };

    var arr = slideshowContainer.getElementsByTagName('a');

    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);
    }

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

}, false);
