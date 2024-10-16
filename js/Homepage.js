	$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
      $('.main-menu').toggleClass('open');
      $(this).toggleClass('open');
    });

    $('.main-menu-item a').click(function (e) {
      e.preventDefault();

      $('body').fadeOut(2000, function () {
          window.location.href = $(e.target).attr('href')
      });
  });
  });

  

  





