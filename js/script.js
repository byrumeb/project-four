// Define options
var options = {
    root: document.querySelector('.slides'),
    threshold: 0.8
  };
  
  
  // Define what we do when things intersect or don't
  var callback = (entries, observer) => {
    entries.forEach(entry => {
      
      // Handle if the entry is intersecting or not
      if (entry.isIntersecting) {
        // Do this if its intersecting
        // add the active class to the right dot
        
        var id = entry.target.id.replace("slide", "dot");
        var dot = document.getElementById(id);
        
        dot.classList.add("active");
        
      } else {
        // Do this if its not
        // remove the active class from any other dot
        
        var id = entry.target.id.replace("slide", "dot");
        var dot = document.getElementById(id);
        
        dot.classList.remove("active");
      }
  
    });
  };
  
  // Setup observer
  var observer = new IntersectionObserver(callback, options);
  
  
  // Tell the observer what to look for
  var targets = document.querySelectorAll('.slides > div');
  
  targets.forEach(target => {
    observer.observe(target);
  });
  

  





  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}