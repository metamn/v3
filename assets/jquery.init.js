jQuery.noConflict();

jQuery(document).ready(function(){
  
  
  // Sticky header
  jQuery(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = jQuery('#menu-products').offset().top;
    
    jQuery(window).scroll(function(){
      if( jQuery(window).scrollTop() > stickyHeaderTop ) {
        jQuery('#menu-products').css({position: 'fixed', top: '0px'});        
        jQuery('#menu-products').addClass('fixed');
      } else {
        jQuery('#menu-products').css({position: 'static', top: '0px'});        
        jQuery('#menu-products').removeClass('fixed');
      }
    });
  });
  
  
  
  // Category select dropdown list
  jQuery(".select-box ul li").hide();
  jQuery(".select-box ul li.active").show();
  
  // Show list items
  jQuery(".select-box h2").click(function() {
    jQuery(this).next().children().show();
  }); 
  
  // Select list item
  jQuery(".select-box ul li").click(function() {
    jQuery(".select-box ul li").removeClass('active');
    jQuery(this).addClass('active');
    
    // remove this when links will work and url will change
    jQuery(".select-box ul li").hide();
    jQuery(".select-box ul li.active").show();
  });
  
  
  
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
