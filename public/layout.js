document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here:
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title"><a href="${nesting}">lace's space</a></div>
	        <img src="SRimg/small-salmon-line.png" id="salmonlinepic">
        	
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-banner">
            <img src="SRimg/grizzco-logo-dither.png" id="grizzlogopic">
          </div>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="${nesting}">Home</a></li>
            <li><a href="${nesting}about">About</a></li>
            <li><a href="${nesting}resources">Resources</a></li>
            <li><a href="${nesting}salmonrun">Salmon Run</a></li>
            <li><a href="${nesting}artpage">2D Art</a></li>
        	<!--<li>
        	
              	<details>
                <summary>Submenu</summary>
                <ul>
                  <li><a href="/page-a">Page A</a></li>
                  <li><a href="/page-b">Page B</a></li>
                  <li><a href="/page-c">Page C</a></li>
                  <li><a href="/page-d">Page D</a></li>
                  <li><a href="/page-e">Page E</a></li>
                </ul>
                </details>
            </li>-->
          </ul>
        </nav>
        <!--
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Filler</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
        </div>
        -->
        
        <div class="sidebar-section">
          <div class="sidebar-title">Really cool sites</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://cheepfish.neocities.org/" target="_blank"><img loading="lazy" src="https://cheepfish.neocities.org/gif/cheepfishbutton.gif"></a>
          	<a href="https://stupied.net/" target="_blank"><img src="https://stupied.net/meta/button.png" alt="stupied"></a>
          	<a href="https://teppyslayouts.neocities.org/" target="_blank"><img src="https://teppyslayouts.neocities.org/teppyslayouts.gif"></a>
            <a href="https://karakuliiii.neocities.org/" target="_blank"><img src="https://karakuliiii.neocities.org/images/assets/iiiibutton.gif" alt="karakuliiii"></a>
            <a href="https://nenrikido.neocities.org/"><img src="https://dl.dropbox.com/s/265wg2om8bjr5g6/nenrikido_button.gif"></img></a>
            
          </marquee>
        </div>

        
        
        <div class="sidebar-section">
          <div class="sidebar-title">blinkies</div>
          <div class="blinkie-section">
            <img src="blinkies/splatoon3.gif">
            <img src="blinkies/octo-time.gif">
            <img src="blinkies/despite-everything.gif">
            <img src="blinkies/gotta-go-fast.gif">
            <img src="blinkies/shadow-hedgehog.gif">
            <img src="blinkies/insomniac.gif">
            <img src="blinkies/possums.gif">
            <img src="blinkies/hug-cow.gif">
            <img src="blinkies/mspaint-palette.gif">
            <img src="blinkies/gay-octopus.gif">
          </div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">My Button</div>
          <div class="site-button">
          	<a href="https://goldlace.neocities.org/" target="_blank"><img src="SRimg/tempButton.png" alt="grizzco"></a>
        	<textarea><a href="https://goldlace.neocities.org/" target="_blank"><img src="SRimg/tempButton.png" alt="grizzco"></a></textarea>
          </div>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>est. jun '26 | <a href="https://neocities.org/site/goldlace">neocities profile</a> | insta: @kinda.blooky</div>
      </footer>`;
}



/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
