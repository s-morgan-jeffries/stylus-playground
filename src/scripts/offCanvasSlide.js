(function ($) {
  'use strict';

  $(function () {
    $('#menu-toggle').click(function (e) {
      $('body').toggleClass('active');
      e.preventDefault();
    });
  });
}(jQuery));