jQuery.noConflict();

jQuery(document).ready(function(){
  
  
  // Show Search, Cart, Information on click
  jQuery("header h2").click(function() {
    jQuery(this).next().slideToggle();
  });
  
    
});
