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


    $('#f_submit').click(function(e) {
      e.preventDefault();

      var $requestResult = $("#retornoHTML");
      var nome =  $("#name").val();
      var email =  $("#email").val();
      var phone = $("#phone").val();
      var date = $("#date").val();
      var message = $("#message").val();

      if(nome.length <= 3){
        alert('Informe seu nome');
        console.log('nao preencheu campo nome');
        return false;
      }
      if(email.length <= 5){
        alert('Informe seu email');
        console.log('nao preencheu campo email');
        return false;
      }
      if(message.length <= 5){
        alert('Escreva uma mensagem');
        console.log('nao preencheu campo mensagem');
        return false;
      }

      $.ajax({
        url: '/mail.php/',
        type: 'POST',
        data: {
          name: $("#name").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          date: $("#date").val(),
          message: $("#message").val(),
        },
        error: function(data) {
          console.log("Deu erro!", data);
          $requestResult.append($("<div>", {
            "class": "alert alert-danger",
            "text": "E-mail não enviado!"
          }));
        },
        success: function(data){
          console.log("Enviado com sucesso!", data);
          $requestResult.append($("<div>", {
            "class": "alert alert-success",
            "text": "E-mail enviado com sucesso."
          }));
        }
      });
    });
  });