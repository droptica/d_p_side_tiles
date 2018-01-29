(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.droopler_subtheme = {
    attach: function (context, settings) {
      // Enable Masonry.
      $('.d-side-tiles').masonry({
        itemSelector: '.d-side-tiles-item',
        columnWidth: '.d-side-tiles-sizer',
        percentPosition: true,
      });
    }
  };

})(jQuery, Drupal);
