(function(scope, $) {
  $(document).on('ready', onReady);

  function onReady() {
    initializeCountDown();
  }

  function initializeCountDown() {
    var countdown = $('[data-countdown]');
    var endAt = countdown.attr('data-countdown');

    countdown.countdown(endAt, { elapse: false, precision: 1000 })
             .on('update.countdown', onTick);

    function onTick(event) {
      var html = event.strftime(
        '<div class="weeks">' +
          '<span class="count">%w</span> weeks' +
        '</div>' +
        '<div class="days">' +
          '<span class="count">%d</span> days' +
        '</div>' +
        '<div class="clock">%H:%M:%S</div>'
      );

      $(this).html(html);
    }
  }
})(window, jQuery);
