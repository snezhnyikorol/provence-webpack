let menuState = false;

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map').css({'right': '0'})
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map').css({'right': '-1000px'})
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map').css({'right': '-1000px'})
  }
})


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

// $('#price_day-out').mask("9?9 суток" ,{placeholder:" ", autoclear: false})

let count = 1;
const bill = 3500;

$('#price_day-less').click(function () {
  if (count!=1) {
    count = parseInt($('#price_day-out').val().split(' ')[0])
  }
  if (count>1) {
    count--
  }
  $('#price_day-out').val(count + ' суток')
  calculate()
})

$('#price_day-more').click(function () {
  if (count!=1) {
    count = parseInt($('#price_day-out').val().split(' ')[0])
  }
  count++
  $('#price_day-out').val(count + ' суток')
  calculate()
})

$('#price_day-out').on('input', function () {
  count = parseInt($('#price_day-out').val().split(' ')[0])
  if (isNaN(count)) {
    count = 1
  }
  let value = $('#price_day-out').val();
  if (value.indexOf(' суток') == -1) {
    $('#price_day-out').val(count+ ' суток')
  }
  setCaretPosition('price_day-out', $('#price_day-out').val().length - 6)
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

$('.lightbox').slickLightbox(
  {
    itemSelector: '.excursion_container img',
    src: 'src'
  }
)


var iframe = $('#ourframe', parent.document.body);
iframe.height($(window).height() * 0.7);


