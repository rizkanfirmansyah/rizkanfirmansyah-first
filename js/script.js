$(document).ready(function() {
    // RESPONSIVE USING JQUERY
    $(this).scrollTop(0);
    let coba = $(window).width();
    responsive(coba)
    // RESPONSIVE USING EVENT
    $(window).resize(function() {
      coba = $(window).width();
        responsive(coba)
    })
    

  })

  function responsive(coba) {
    if (coba < 576) {
        $('h1.display-4').addClass('display-6')
        $('h1.display-4').removeClass('display-4')
        $('h1.display-5').addClass('display-6')
        $('h1.display-5').removeClass('display-5')
        $('#footerKeterangan').addClass('text-center')
        $('.button').addClass('btn-block')
        $('#sizeOverHeader').hide()
        $('.button').removeClass('btn-lg')
        $('#headerJumbotron').removeClass('my-4')
        $('.brand').removeClass('mx-5')
        $('#formInput').removeClass('mx-5')
        $('.brand').addClass('mx-3')
        $('.keterangan').addClass('text-center')
    }else{
        $('#headerJumbotron').addClass('my-4')
        $('#footerKeterangan').removeClass('text-center')
        $('h1.display-6').addClass('display-4')
        $('h1.display-6').removeClass('display-6')
        $('#footerKeterangan').addClass('display-5')
        $('.button').removeClass('btn-block')
        $('#sizeOverHeader').show()
        $('.button').addClass('btn-lg')
        $('.brand').addClass('mx-5')
        $('#formInput').addClass('mx-5')
        $('.keterangan').removeClass('text-center')
        $('.brand').removeClass('mx-3')
    }
  }