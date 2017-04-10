  //prevent # links from moving to top
  $('a[href="#"][data-top!=true]').click(function(e){
    e.preventDefault();
  });

  smoothScroll.init({
    offset: 0
  });

  //  SCROLL TO TOP

  $(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

  });

  //  WOW
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  );
  wow.init();


  $(document).ready(function(){


    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
    };

    $('.sp_celphones').mask(SPMaskBehavior, spOptions);
    $('.date').mask('00/00/0000');


    $('#f_submit').click(function() {
      var $requestResult = $("#retornoHTML");
      var campo_nome =  $("#f_name").val();
      var campo_email =  $("#f_mail").val();
      var campo_telefone = $("#f_phone").val();
      var campo_data = $("#f_date").val();
      var campo_msg = $("#f_text").val();

      if(campo_nome.length <= 3){
        alert('Informe seu nome');
        return false;
      }
      if(campo_email.length <= 5){
        alert('Informe seu email');
        return false;
      }
      if(campo_msg.length <= 5){
        alert('Escreva uma mensagem');
        return false;
      }

      $.ajax({
        url: '../mail.php',
        type: 'POST',
        data: {
          name: $("#f_name").val(),
          e_mail: $("#f_mail").val(),
          phone: $("#f_phone").val(),
          date: $("#f_date").val(),
          msg: $("#f_text").val(),
        },
        error: function() {
          console.log("Deu erro!");
          $requestResult.append($("<div>", {
            "class": "alert alert-danger",
            "text": "E-mail não enviado!"
          }));
        },
        success: function(msg){
          console.log("Enviado com sucesso!");
          $requestResult.append($("<div>", {
            "class": "alert alert-success",
            "text": "E-mail enviado com sucesso."
          }));
        }
      });
    });
  });