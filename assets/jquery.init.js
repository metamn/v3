jQuery.noConflict();

jQuery(document).ready(function(){
  
  
  // Product Scroll view
  jQuery("#product.scroll").first().addClass('active');
  
  jQuery("#product-scroll-right").click(function() {
    var first = jQuery("#product.active");
            
    jQuery(first).removeClass('active');
    jQuery(first).hide();
    
    if (!(jQuery(first).next().hasClass('scroll'))) {
      jQuery("#product.scroll").first().addClass('active');
      jQuery("#product.scroll").first().show();
    } else {
      jQuery(first).next().addClass('active');
      jQuery(first).next().show();
    }
  }); 
  jQuery("#product-scroll-left").click(function() {
    var first = jQuery("#product.active");
            
    jQuery(first).removeClass('active');
    jQuery(first).hide();
    
    if (!(jQuery(first).prev().hasClass('scroll'))) {
      jQuery("#product.scroll").last().addClass('active');
      jQuery("#product.scroll").last().show();
    } else {
      jQuery(first).prev().addClass('active');
      jQuery(first).prev().show();
    }
  }); 
});
