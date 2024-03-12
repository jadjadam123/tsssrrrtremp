/*(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('.offcanvas_full_navbar ul').slideToggle();
      });
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
      // If a link has a dropdown, add sub menu toggle.
      $('.offcanvas_full_navbar ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
      
      
    }); 
  });*/
  // $('.navbar_full_list li').click(function(){
  //   jQuery('.full_navbar').addClass('fixed-top');
  // });
  // jQuery('body').click(function(){
  //   setTimeout(function(){
  //     if(jQuery('.offcanvas-backdrop').length==0){
  //       jQuery('.full_navbar').removeClass('fixed-top');
  //     }
  //   },200);
  // })

  $(document).ready(function() {
      // Handle the menu button click event
      $(".toggle-button").on("click", function() {
        $("body").toggleClass("open-menu");
      });
    
      // Close the menu when clicking outside of it
      $(document).on("click", function(event) {
        if (!$(event.target).closest(".offcanvaswrp").length && !$(event.target).closest(".toggle-button").length) {
          $("body").removeClass("open-menu");
        }
      });
    });