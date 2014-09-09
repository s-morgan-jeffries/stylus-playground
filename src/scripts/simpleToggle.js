(function ($) {
  'use strict';

  $(function () {
    $('#menu-toggle').click(function (e) {
      $('#menu').toggleClass('open');
      e.preventDefault();
    });
  });
}(jQuery));