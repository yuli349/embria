function addFixedHeader() {
  var element = document.getElementById('header');
  var main = document.getElementById('main');
  element.classList.add('fixed_header');
  main.classList.add('main_top');
}
function addFixedSidebar() {
  var element = document.getElementById('sidebar');
  element.classList.add('fixed_sidebar');
  $(window).scroll(function () {
    if ($('#sidebar').length) {
      fixedBlock($('#sidebar'),0);
    }
  });

  $(window).resize(function () {
    if ($('#sidebar').length) {
      fixedBlock($('#sidebar'), 0);
    }
  });
}
function addFixedFooter() {
  var element = document.getElementById('footer');
  var main = document.getElementById('main');
  element.classList.add('fixed_footer');
  main.classList.add('main_bottom');
}

function fixedBlock (element, fixedHeaderHeight) {
  var scroll = $(window).scrollTop();
  var startPosition = element.parent().offset().top - fixedHeaderHeight;
  if (scroll > startPosition && element.outerHeight() < $(window).height() && $( '#header' ).hasClass( 'fixed_header' )) {
    element.css(
      {
        'position':'fixed',
        'top': '97px',
      }
    );
    element.addClass('fixed_sidebar');
  }
  else if (scroll > startPosition && element.outerHeight() < $(window).height()) {
      element.css(
        {
          'position':'fixed',
          'top':fixedHeaderHeight,
        }
      );
    element.addClass('fixed_sidebar');
  }
   else {
    element.css(
      {
        'position':'absolute',
        'top':fixedHeaderHeight,
      }
    );
    element.removeClass('fixed_sidebar');
  }

}

$('.menu-icon').click(function() {
  $('.menu_block').addClass('visible_mobile');
  return false;
});

$('.btn-close').click(function() {
  $('.menu_block').removeClass('visible_mobile');
  return false;
});