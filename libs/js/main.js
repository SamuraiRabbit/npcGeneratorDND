/*-----ON LOAD-----*/
$(window).on('load', function () {
    // Launches pre-loader while html loads
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
        });
    }   
  });