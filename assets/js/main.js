$(window).on('load', function () {
  var $preloader = $('.preloader_container')
  $preloader.delay(500).fadeOut('slow');
})

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) {
    sticky.addClass('fixed');
  }
  else {
    sticky.removeClass('fixed');
  } 
});


let rus = {};
let menuState = false;
var lang = 'rus'


var $root = $('html, body');

$( document ).ready(function() {
  $('.top_slider').slick(
    {
      lazyLoad: 'progressive',
    }
  )
  $('.photo_slider').slick(
    {
      initialSlide: 7,
      lazyLoad: 'progressive'
    }
  )
  
  $('.lightbox').slickLightbox(
    {
      itemSelector: '.excursion_container img',
      src: 'data-full'
    }
  )
  move()
});


$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500);

    return false;
});


$('.eng').toggle()

$('#lang_eng').click(function (event) {
  if (lang == 'rus') {
    lang = 'eng'
    $('.rus').toggle()
    $('.eng').toggle()
    translateWidget('eng')
    $('#ourframe').attr('src', $('#ourframe').attr('src'))
    document.title = 'Provence Studios'
    $('#price_day-out').attr('placeholder', '1 day')
  }
  event.preventDefault()
})

$('#lang_rus').click(function (event) {
  if (lang == 'eng') {
    lang = 'rus'
    $('.rus').toggle()
    $('.eng').toggle()
    translateWidget('rus')
    $('#ourframe').attr('src', $('#ourframe').attr('src'))
    document.title = 'Студии Прованс'
    $('#price_day-out').attr('placeholder', '1 сутки') 
  }
  event.preventDefault()
})

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').animate({right: '0px'}, 500, function () {
      $('.substrate').animate({opacity: '0.5'}, 200)
    })
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.substrate').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })  
  }
})

function move() {
  pillow1 = $('#pillow1').position();
  pillow2 = $('#pillow2').position();
  p1 = $('#p1').position();
  p2 = $('#p2').position();
  feather1 = $('#feather1').position();
  feather2 = $('#feather2').position();
  feather3 = $('#feather3').position();
  feather4 = $('#feather4').position();
  feather5 = $('#feather5').position();
  feather6 = $('#feather6').position();
  feather7 = $('#feather7').position();
  feather8 = $('#feather8').position();
  feather9 = $('#feather9').position();
  feather10 = $('#feather10').position();
  feather11 = $('#feather11').position();
  feather12 = $('#feather12').position();



  $(document).on('mousemove', function(e) {

      $('#pillow1').css({
          left: e.pageX / 50 + pillow1.left,
          top: -e.pageY / 50 + pillow1.top,
          filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#pillow2').css({
          left: -e.pageX / 100 + pillow2.left,
          top: e.pageY / 100 + pillow2.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#p1').css({
        left: e.pageX / 50 + p1.left,
        top: -e.pageY / 50 + p1.top,
        filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#p2').css({
          left: -e.pageX / 100 + p2.left,
          top: e.pageY / 100 + p2.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather1').css({
          left: -e.pageX / 100 + feather1.left,
          top: e.pageY / 100 + feather1.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather2').css({
          left: e.pageX / 100 + feather2.left,
          top: -e.pageY / 100 + feather2.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather3').css({
        left: e.pageX / 50 + feather3.left,
        top: -e.pageY / 50 + feather3.top,
        filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#feather4').css({
          left: -e.pageX / 100 + feather4.left,
          top: e.pageY / 100 + feather4.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather5').css({
        left: e.pageX / 50 + feather5.left,
        top: -e.pageY / 50 + feather5.top,
        filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#feather6').css({
          left: -e.pageX / 100 + feather6.left,
          top: e.pageY / 100 + feather6.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather7').css({
          left: -e.pageX / 100 + feather7.left,
          top: e.pageY / 100 + feather7.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather8').css({
          left: e.pageX / 100 + feather8.left,
          top: -e.pageY / 100 + feather8.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });    
      $('#feather9').css({
        left: e.pageX / 50 + feather9.left,
        top: -e.pageY / 50 + feather9.top,
        filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#feather10').css({
          left: -e.pageX / 100 + feather10.left,
          top: e.pageY / 100 + feather10.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });
      $('#feather11').css({
        left: e.pageX / 50 + feather11.left,
        top: -e.pageY / 50 + feather11.top,
        filter: 'blur(' + e.pageX / 800 + 'px)'
      });
      $('#feather12').css({
          left: -e.pageX / 100 + feather12.left,
          top: e.pageY / 100 + feather12.top,
          filter: 'blur(' + e.pageX / 1000 + 'px)'
      });   
  });

}

let count = 1;
const bill = 3500;

$('#price_day-less').click(function () {
  if (count!=1) {
    count = parseInt($('#price_day-out').val().split(' ')[0])
  }
  if (count>1) {
    count--
  }
  if (lang == 'rus') {
    $('#price_day-out').val(count + ' суток')
  } else {
    $('#price_day-out').val(count + ' days')
  }

  calculate()
})

$('#price_day-more').click(function () {
  if (count!=1) {
    count = parseInt($('#price_day-out').val().split(' ')[0])
  }
  count++
  if (lang == 'rus') {
    $('#price_day-out').val(count + ' суток')
  } else {
    $('#price_day-out').val(count + ' days')
  }
  calculate()
})

$('#price_day-out').on('input', function () {
  count = parseInt($('#price_day-out').val().split(' ')[0])
  if (isNaN(count)) {
    count = 1
  }
  let value = $('#price_day-out').val();
  if (lang == 'rus') {
    if (value.indexOf(' суток') == -1) {
      $('#price_day-out').val(count+ ' суток')
    }
    setCaretPosition('price_day-out', $('#price_day-out').val().length - 6)
  } else {
    if (value.indexOf(' days') == -1) {
      $('#price_day-out').val(count+ ' days')
    }
    setCaretPosition('price_day-out', $('#price_day-out').val().length - 5)
  }

  calculate()
})

$("#price input[name='currency']").click(function() {
  calculate()
})

function calculate() {
  let sum = count * bill;
  if (isNaN(sum)) {
    sum = 0
  }
  switch ($("#price input[name='currency']:checked").val()) {
    case 'rub':
      $('.price_out-text').text(sum)
      break;
    case 'usd':
      $('.price_out-text').text(sum * 0.016)
      break;
    case 'eur':
      $('.price_out-text').text(sum * 0.014)
      break;
    default:
      break;
  }
}

function setCaretPosition(elemId, caretPos) {
  var elem = document.getElementById(elemId);

  if(elem != null) {
      if(elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
      }
      else {
          if(elem.selectionStart) {
              elem.focus();
              elem.setSelectionRange(caretPos, caretPos);
          }
          else
              elem.focus();
      }
  }
}

function translateWidget(to) {

  if (to == 'eng') {

    rus['eabr-header-title'] = $('.eabr-header-title').text()
    $('.eabr-header-title').text('What do those who have visited us say')
    rus['checkin'] = $("[for=rc-checkin]").html()
    $("[for=rc-checkin]").html('Сheck in&nbsp;')
    rus['checkout'] = $("[for=rc-checkout]").html()
    $("[for=rc-checkout]").html('Сheck out&nbsp;')
    rus['guests'] = $("[for=guests]").html()
    $("[for=guests]").html('Guests&nbsp;')
    rus['option'] = $('.rc-search_form__item__guests__control option:eq(8)').text();
    $('.rc-search_form__item__guests__control option:eq(8)').text('more than 9');
    rus['rc-search_form__search_btn'] = $(".rc-search_form__search_btn").text()
    translateFlat(lang)
    $(".rc-search_form__search_btn").text('Search') 
  }else if (to == 'rus') {
    $('.eabr-header-title').text(rus['eabr-header-title'])
    $("[for=rc-checkin]").html(rus['checkin'])
    $("[for=rc-checkout]").html(rus['checkout'])
    $("[for=guests]").html(rus['guests'] )
    $('.rc-search_form__item__guests__control option:eq(8)').text(rus['option']);
    $(".rc-search_form__search_btn").text(rus['rc-search_form__search_btn'])
    translateFlat(lang)
  }
    

}

function translateFlat(lang) {
  let first = $('.rc-flat').eq(0)
  let second = $('.rc-flat').eq(1)
  if (lang == 'eng'){
  
    rus['rc-text-center'] =  $(".rc-text-center").text()
    $("rc-text-center").text('Loading...')
    rus['rc-flat__price__cur'] = $(".rc-flat__price__cur").text()
    $(".rc-flat__price__cur").text('RUB per day')
    rus['rc-flat__more__btn"'] = $(".rc-flat__more__btn").text()
    $(".rc-flat__more__btn").text('More')
    rus['rc-flat__book__btn'] = $(".rc-flat__book__btn").text()
    $(".rc-flat__book__btn").text('Book')

    let info_1 = `<span class="rc-flat__info__adress">St. Petersburg, Socialist 13</span><br><!-- react-text: 70 -->m. Zvenigorodskaya<!-- /react-text --><br><!-- react-text: 72 -->Rooms: <!-- /react-text --><!-- react-text: 73 -->1<!-- /react-text --><br><!-- react-text: 75 -->Sleeps: <!-- /react-text --><!-- react-text: 76 -->2+1<!-- /react-text --><br><span><!-- react-text: 79 -->Floor: <!-- /react-text --><!-- react-text: 80 -->1<!-- /react-text --></span><div class="rc-flat__info__services" style=""><i class="rc-icon rc-icon-washing_machine" title="Washer"></i><i class="rc-icon rc-icon-wi_fi" title="Wi-Fi Internet"></i><i class="rc-icon rc-icon-tv" title="TV"></i><i class="rc-icon rc-icon-kids" title="Can children"></i><i class="rc-icon rc-icon-refrigerator" title="Fridge"></i><i class="rc-icon rc-icon-stove" title="Kitchen stove"></i><i class="rc-icon rc-icon-microwave" title="Microwave oven"></i><i class="rc-icon rc-icon-iron" title="Iron and ironing board"></i><i class="rc-icon rc-icon-waterheater" title="Water heater"></i><i class="rc-icon rc-icon-cabletv" title="Cable TV"></i><i class="rc-icon rc-icon-romantic" title="For romantic meetings"></i></div>`
    let info_2 = `<span class="rc-flat__info__adress">St. Petersburg, Socialist 13</span><br><!-- react-text: 70 -->m. Zvenigorodskaya<!-- /react-text --><br><!-- react-text: 72 -->Rooms: <!-- /react-text --><!-- react-text: 73 -->1<!-- /react-text --><br><!-- react-text: 75 -->Sleeps: <!-- /react-text --><!-- react-text: 76 -->2+2<!-- /react-text --><br><span><!-- react-text: 79 -->Floor: <!-- /react-text --><!-- react-text: 80 -->1<!-- /react-text --></span><div class="rc-flat__info__services" style=""><i class="rc-icon rc-icon-washing_machine" title="Washer"></i><i class="rc-icon rc-icon-wi_fi" title="Wi-Fi Internet"></i><i class="rc-icon rc-icon-tv" title="TV"></i><i class="rc-icon rc-icon-kids" title="Can children"></i><i class="rc-icon rc-icon-refrigerator" title="Fridge"></i><i class="rc-icon rc-icon-stove" title="Kitchen stove"></i><i class="rc-icon rc-icon-microwave" title="Microwave oven"></i><i class="rc-icon rc-icon-iron" title="Iron and ironing board"></i><i class="rc-icon rc-icon-waterheater" title="Water heater"></i><i class="rc-icon rc-icon-cabletv" title="Cable TV"></i><i class="rc-icon rc-icon-romantic" title="For romantic meetings"></i></div>`
    let more_1 = `<div class="rc-row" style="margin-bottom: 10px;"
    ><div class="rc-col-sm-12 rc-flat__more__info__services">
    <div class="rc-row rc-flat__more__info__services__row">
    <div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-washing_machine"></i>
    <!-- react-text: 105 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 106 -->Washer<!-- /react-text -->
    </div><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-wi_fi"></i><!-- react-text: 109 -->&nbsp;
    <!-- /react-text --><!-- react-text: 110 -->Wi-Fi Internet<!-- /react-text -->
    </div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-tv"></i><!-- react-text: 113 -->&nbsp;<!-- /react-text --><!-- react-text: 114 -->
    TV<!-- /react-text --></div></div><div class="rc-row rc-flat__more__info__services__row"><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-kids"></i><!-- react-text: 118 -->&nbsp;<!-- /react-text --><!-- react-text: 119 -->Can children<!-- /react-text --></div>
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-refrigerator"></i><!-- react-text: 122 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 123 -->Fridge<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-stove"></i>
    <!-- react-text: 126 -->&nbsp;<!-- /react-text --><!-- react-text: 127 -->Kitchen stove<!-- /react-text --></div></div>
    <div class="rc-row rc-flat__more__info__services__row"><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-microwave"></i>
    <!-- react-text: 131 -->&nbsp;<!-- /react-text --><!-- react-text: 132 -->Microwave oven<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-iron"></i><!-- react-text: 135 -->&nbsp;<!-- /react-text --><!-- react-text: 136 -->Iron and ironing board<!-- /react-text --></div>
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-waterheater"></i><!-- react-text: 139 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 140 -->Water heater<!-- /react-text --></div></div><div class="rc-row rc-flat__more__info__services__row">
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-cabletv"></i><!-- react-text: 144 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 145 -->Cable TV<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-romantic"></i>
    <!-- react-text: 148 -->&nbsp;<!-- /react-text --><!-- react-text: 149 -->For romantic meetings<!-- /react-text --></div></div></div></div><div class="rc-row">
    <div class="rc-col-sm-12 rc-flat__more__info__desc"><p>&nbsp;Center, to Nevsky 15 minutes on foot. Nearby are three metro stations (Vladimirskaya, Dostoevskaya, Zvenigorodskaya), restaurants, shops, cafes, market, shopping centers, oceanarium. Nevsky is 1 km away. Cozy studio apartment in the historic city center. The apartment is completely ready for a comfortable stay - design repair, there are all necessary furniture and appliances, cable TV, Internet. double bed 160 cm, single bed 90 cm, chest of drawers, wardrobe, TV, dining table, chairs, stools, bedding, kitchen utensils, dishes.<br>Cozy, comfortable, reliable.</p>
    </div></div><div class="rc-row"><div class="rc-col-sm-12 rc-flat__more__info__map_wrapper"></div></div>`
    let more_2 = `<div class="rc-row" style="margin-bottom: 10px;"
    ><div class="rc-col-sm-12 rc-flat__more__info__services">
    <div class="rc-row rc-flat__more__info__services__row">
    <div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-washing_machine"></i>
    <!-- react-text: 105 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 106 -->Washer<!-- /react-text -->
    </div><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-wi_fi"></i><!-- react-text: 109 -->&nbsp;
    <!-- /react-text --><!-- react-text: 110 -->Wi-Fi Internet<!-- /react-text -->
    </div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-tv"></i><!-- react-text: 113 -->&nbsp;<!-- /react-text --><!-- react-text: 114 -->
    TV<!-- /react-text --></div></div><div class="rc-row rc-flat__more__info__services__row"><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-kids"></i><!-- react-text: 118 -->&nbsp;<!-- /react-text --><!-- react-text: 119 -->Can children<!-- /react-text --></div>
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-refrigerator"></i><!-- react-text: 122 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 123 -->Fridge<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-stove"></i>
    <!-- react-text: 126 -->&nbsp;<!-- /react-text --><!-- react-text: 127 -->Kitchen stove<!-- /react-text --></div></div>
    <div class="rc-row rc-flat__more__info__services__row"><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-microwave"></i>
    <!-- react-text: 131 -->&nbsp;<!-- /react-text --><!-- react-text: 132 -->Microwave oven<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4">
    <i class="rc-icon rc-icon-iron"></i><!-- react-text: 135 -->&nbsp;<!-- /react-text --><!-- react-text: 136 -->Iron and ironing board<!-- /react-text --></div>
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-waterheater"></i><!-- react-text: 139 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 140 -->Water heater<!-- /react-text --></div></div><div class="rc-row rc-flat__more__info__services__row">
    <div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-cabletv"></i><!-- react-text: 144 -->&nbsp;<!-- /react-text -->
    <!-- react-text: 145 -->Cable TV<!-- /react-text --></div><div class="rc-flat__more__info__services__item rc-col-sm-4"><i class="rc-icon rc-icon-romantic"></i>
    <!-- react-text: 148 -->&nbsp;<!-- /react-text --><!-- react-text: 149 -->For romantic meetings<!-- /react-text --></div></div></div></div><div class="rc-row">
    <div class="rc-col-sm-12 rc-flat__more__info__desc"><p>&nbsp;Center, to Nevsky 15 minutes on foot. Nearby are three metro stations (Vladimirskaya, Dostoevskaya, Zvenigorodskaya), restaurants, shops, cafes, market, shopping centers, oceanarium. Nevsky is 1 km away. Cozy studio apartment in the historic city center. The apartment is completely ready for a comfortable stay - design repair, there are all necessary furniture and appliances, cable TV, Internet. double bed 160 cm, double sofa bed 160 cm, chest of drawers, wardrobe, TV, dining table, chairs, stools, bedding, kitchen utensils, dishes.<br>Cozy, comfortable, reliable.</p>
    </div></div><div class="rc-row"><div class="rc-col-sm-12 rc-flat__more__info__map_wrapper"></div></div>`
    if ($('.rc-flat__info', first).text().slice($('.rc-flat__info', first).text().indexOf('Спальных мест')+17,$('.rc-flat__info', first).text().indexOf('Спальных мест')+18) == '1') {
      rus['info_1'] =  $('.rc-flat__info', first).html()
      rus['more_1'] =  $('.rc-flat__more__info', first).html()
      rus['info_2'] =  $('.rc-flat__info', second).html()
      rus['more_2'] =  $('.rc-flat__more__info', second).html()

      $('.rc-flat__info', first).html(info_1)

      $('.rc-flat__more__info', first).html(more_1)

      $('.rc-flat__info', second).html(info_2)

      $('.rc-flat__more__info', second).html(more_2)
    } else if ($('.rc-flat__info', first).text().slice($('.rc-flat__info', first).text().indexOf('Спальных мест')+17,$('.rc-flat__info', first).text().indexOf('Спальных мест')+18) == '2') {
      rus['info_1'] =  $('.rc-flat__info', first).html()
      rus['more_1'] =  $('.rc-flat__more__info', first).html()
      rus['info_2'] =  $('.rc-flat__info', second).html()
      rus['more_2'] =  $('.rc-flat__more__info', second).html()
      $('.rc-flat__info', first).html(info_2)
      $('.rc-flat__more__info', first).html(more_2)
      $('.rc-flat__info', second).html(info_1)
      $('.rc-flat__more__info', second).html(more_1)
    }
  } else if (lang == 'rus') {
    $('.rc-flat__info', first).html(rus['info_1'])
    $('.rc-flat__more__info', first).html(rus['more_1'])
    $('.rc-flat__info', second).html(rus['info_2'])
    $('.rc-flat__more__info', second).html(rus['more_2'])
    $("rc-text-center").text(rus['rc-text-center'] )
    $(".rc-flat__price__cur").text('руб. в сутки')
    $(".rc-flat__more__btn").text('Подробнее')
    $(".rc-flat__book__btn").text('Забронировать')
  }
}

let bodyClass = new MutationObserver(function (mutations) {
  let list = document.body.classList
  if (list.contains('rc-modal-open')) {
    setTimeout(function(){if (lang=='eng'){translateModal(lang)}}, 1000)
  }
});

bodyClass.observe(document.body, { attributes: true })
let price_flat = 0
let prepayment_flat = 0
function translateModal(lang) {

  if (lang == 'eng') {
    rus['rc-booking_form__pay_info div'] = $('.rc-booking_form__pay_info div').text() 
    price_flat = rus['rc-booking_form__pay_info div'].match(/[-]?[0-9]+(.[0-9]+)?/)[0]
    prepayment_flat = rus['rc-booking_form__pay_info div'].match(/[-]?[0-9]+(.[0-9]+)?/)[1]
    rus['rc-modal-title'] = $(".rc-modal-title").text()
    $(".rc-modal-title").text('Booking')
    if ($('.rc-booking_modal__flat_info__img + div').text().charAt($('.rc-booking_modal__flat_info__img + div').text().length-1) == '1') {
      rus['rc-booking_modal__flat_info__img + div'] = $('.rc-booking_modal__flat_info__img + div').html()
      $('.rc-booking_modal__flat_info__img + div').html(`St. Petersburg, Socialist 13<br>metro Zvenigorodskaya<br>Rooms: 1<br>Sleeps: 2 + 1`)
    } else {
      rus['rc-booking_modal__flat_info__img + div'] = $('.rc-booking_modal__flat_info__img + div').html()
      $('.rc-booking_modal__flat_info__img + div').html(`St. Petersburg, Socialist 13<br>metro Zvenigorodskaya<br>Rooms: 1<br>Sleeps: 2 + 2`)
    }
    rus['label[for=rc-checkin]:eq(0)'] = $(".rc-booking_form__dates label[for=rc-checkin]:eq(0)").text()
    $(".rc-booking_form__dates label[for=rc-checkin]:eq(0)").text('Сheck in')
    rus['label[for=rc-checkin]:eq(1)'] = $(".rc-booking_form__dates label[for=rc-checkin]:eq(1)").text()
    $(".rc-booking_form__dates label[for=rc-checkin]:eq(1)").text('Сheck out')
    rus['rc-booking_form__price div:eq(0)'] = $('.rc-booking_form__price div:eq(0)').html()
    $('.rc-booking_form__price div:eq(0)').html(`Amount for 1 night<br>${price_flat} rubles`)
    rus['rc-booking_form__price div:eq(1)'] = $('.rc-booking_form__price div:eq(1)').html()
    $('.rc-booking_form__price div:eq(1)').html(`Prepayment<br>${prepayment_flat} rubles`)
    rus['[for=name]'] = $('[for=name]').text()
    $('[for=name]').text('Name*')
    rus['[for=guests]'] = $('[for=guests]').text()
    $('[for=guests]').text('Guests')
    rus['[for=phone]'] = $('[for=phone]').text()
    $('[for=phone]').text('Phone*')
    rus['[for=comment]'] = $('[for=comment]').text()
    $('[for=comment]').text('Your wishes')

    $('.rc-booking_form__pay_info div').text(`The reservation amount is ${price_flat} rubles. In order to book an apartment you need to make an advance payment of ${prepayment_flat} rubles. You will pay the remaining amount upon check-in.`)
    rus['rc-checkbox'] = $('.rc-checkbox').html()
    $('.rc-checkbox').html(`<div class="rc-checkbox" style="margin-bottom: 0px;"><label><input type="checkbox" value="false">I agree to the terms of the user agreement</label></div>`)
    $('.rc-btn-default').text('Cancel')
    $('.rc-flat__book__btn').text('Book')
  } else if (lang == 'rus') {
    $(".rc-modal-title").text(rus['rc-modal-title'])
    $('.rc-booking_modal__flat_info__img + div').html(rus['rc-booking_modal__flat_info__img + div'])
    $(".rc-booking_form__dates label[for=rc-checkin]:eq(0)").text(rus['label[for=rc-checkin]:eq(0)'])
    $(".rc-booking_form__dates label[for=rc-checkin]:eq(1)").text(rus['label[for=rc-checkin]:eq(1)'])
    $('.rc-booking_form__price div:eq(0)').html(rus['rc-booking_form__price div:eq(0)'])
    $('.rc-booking_form__price div:eq(1)').html(rus['rc-booking_form__price div:eq(1)'])
    $('[for=name]').text(rus['[for=name]'])
    $('[for=guests]').text(rus['[for=guests]'])
    $('[for=phone]').text(rus['[for=phone]'])
    $('[for=comment]').text(rus['[for=comment]'])
    $('.rc-booking_form__pay_info div').text(rus['rc-booking_form__pay_info div']) 
    $('.rc-checkbox').html(rus['rc-checkbox'])
    $('.rc-btn-default').text('Отмена')
    $('.rc-flat__book__btn').text('Забронировать')
  }
}

$('body').on('click','.rc-search_form__search_btn', function () {
  setTimeout(function () {  translateFlat(lang)}, 3000)

})

$('body').on('DOMContentLoaded', function () {
  alert('a')
})
