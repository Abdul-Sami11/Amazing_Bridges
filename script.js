document.getElementsByTagName("nav")[0].innerHTML=`<div class="navbar" style=" background-color:rgb(121, 35, 104); >
            <a href="#"><img src="e.png" alt=""></a>
          <a class="" href="index.html">Home</a>
          <a href="category.html">Category</a>
          <a href="Queries.html">Queries</a>
          <a href="Gallery.html">Gallery</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact Us</a>
          <a href="feedback.html">Feedback</a>
          <a href="download.html">Download</a>
      </div>
   `
// document.getElementsByTagName("footer")[0].innerHTML=`<footer class="footer bg-dark text-white">
//   <div class="container">
//     <div class="row">
//       <!-- About Us Column -->
//       <div class="col-md-4">
//         <h4>About Us</h4>
//         <ul class="list-unstyled">
//           <li><a href="about.html#story" class="text-white">Our Story</a></li>
//           <li><a href="about.html#team" class="text-white">Team</a></li>
//           <li><a href="sitemap.html" class="text-white">Sitemap</a></li>
//         </ul>
//       </div>

//       <!-- Services Column -->
//       <div class="col-md-4">
//         <h4>Services</h4>
//         <ul class="list-unstyled">
//           <li><a href="#" class="text-white">Web Design</a></li>
//           <li><a href="#" class="text-white">Development</a></li>
//           <li><a href="#" class="text-white">Hosting</a></li>
//         </ul>
//       </div>

//       <!-- Contact Us Column -->
//       <div class="col-md-4">
//         <h4>Contact Us</h4>
//         <ul class="list-unstyled">
//           <li><a href="#" class="text-white">Email</a></li>
//           <li><a href="#" class="text-white">Phone</a></li>
//           <li><a href="#" class="text-white">Address</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </footer>
// `


document.addEventListener("DOMContentLoaded", function () {
    // Inject the footer content dynamically
    document.getElementsByTagName("footer")[0].innerHTML =`
              <footer class="footer  text-white" style="width: 100%; padding: 20px 0; background-color:rgb(121, 35, 104);">
               <div class="row">
                 <!-- About Us Column -->
                 <div class="col-md-4">
                  <h4>About Us</h4>
                  <ul class="list-unstyled">
                   <li><a href="#" class="text-white">Our Story</a></li>
                   <li><a href="about.html#team" class="text-white">Team</a></li>
                   <li><a href="sitemap.html" class="text-white">Sitemap</a></li>
                  </ul>
                  </div>
  
          <!-- Services Column -->
          <div class="col-md-4">
            <h4>Services</h4>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Web Design</a></li>
              <li><a href="#" class="text-white">Development</a></li>
              <li><a href="#" class="text-white">Hosting</a></li>
            </ul>
          </div>
  
          <!-- Contact Us Column -->
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white"> asamiabdul2008@gmail.com</a></li>
             
              <li><a href="#" class="text-white">03442823623</a></li>
              
              <li><a href="#" class="text-white"> METRO STAR GATE</a></li>
             

            </ul>
          </div>
        </div>
      </footer>
    `;
  
    // Function to adjust the footer position to always stay at the bottom
    function adjustFooterPosition() {
      const body = document.body;
      const html = document.documentElement;
      const footer = document.querySelector('footer');
  
      // Get the full height of the page and the window height
      const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowHeight = window.innerHeight;
  
      if (bodyHeight < windowHeight) {
        // If the content height is smaller than the viewport, make footer stick to bottom
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.width = '100%';
      } else {
        // If the content height is larger than the viewport, place footer below content
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
      }
    }
  
    // Adjust footer position when the page loads and when the window is resized
    adjustFooterPosition();
    window.addEventListener('resize', adjustFooterPosition);
  });

  

  