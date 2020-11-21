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
  
  