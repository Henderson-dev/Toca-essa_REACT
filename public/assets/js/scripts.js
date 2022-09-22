(function ($) {
  // pagina pre carregamento do site
  //$(window).on('load', function() {
  //$("#loader").delay(900).fadeOut("slow");
  //$("#loader").delay(900).addClass("abre-tela");
  //$("#loader").delay(300).slideUp("slow");
  //})

  /*-----------------------------------------------------------------------------*/
  /*  Rolagem suave de tela para os links de Ancora, ligados uma section com ID
/*-----------------------------------------------------------------------------*/
  $('a[href*="#"]:not([href="#"])').on("click", function () {
    let target = $(this.hash);
    console.log(target.length);
    if (target.length) {
      $("html, body").animate({ scrollTop: target.offset().top }, 1000);
      $(".navbar-collapse").collapse("hide");
      return false;
    }
  });

  /*-----------------------------------------------------------------------------*/
  /*  Addiciona e remove classe ao clicar no menu hamburger
/*-----------------------------------------------------------------------------*/
  $(".hamburger").on("click", function () {
    let menu_clicado = document
      .getElementById("m-hamburger")
      .getAttribute("aria-expanded");

    // atrubui o elemento body a variavel
    // let body = $("html");
    // body.addClass("scrollbars-hide");
    // adiciona overflow hiden ao elemento html para evitar a rolagem da página
    $("html").css({ overflow: "hidden" });

    if (menu_clicado == "true") {
      //body.removeClass("scrollbars-hide");
      $("html").css({ overflow: "initial" });
    }
  });

  $(document).on("scroll", function () {
    let nav = $(".main-menu");
    let scroll = $(window).scrollTop();
    if (scroll >= 10) {
      nav.addClass("scrolled");
    } else {
      nav.removeClass("scrolled");
    }
  });

  ///////////////////////////////////////////////////////
  ////////// REINICIANDO A ANIMAÇÃO DA LOGO /////////////
  ///////////////////////////////////////////////////////

  var $logo = $("#animated");
  setInterval(function () {
    $logo.toggleClass("logoSpriteReset");
  }, 10000);

  //////// REINICIANDO A ANIMAÇÃO IMGMOBILE ///////////

  ////////////////////////////////////////////////////////////////
  ///////////// CHECA SCROLL PARA MOSTRAR ELEMENTO///////////////
  myID = document.getElementById("volta-topo");

  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 700) {
      myID.className = "volta-topo show";
    } else {
      myID.className = "volta-topo hide";
    }
  };

  window.addEventListener("scroll", myScrollFunc);
})(jQuery);

/*-----------------------------------------------------------------------------*/
/*  Addiciona modal simples no projeto
/*-----------------------------------------------------------------------------*/

// -------------------------------------------
// adiciona a funcionalidade de ir para o topo ao abrir um colapse
$(".collapse").on("shown.bs.collapse", function (e) {
  $(this).prev().addClass("active");
  var $card = $(this).closest(".card");
  var $open = $($(this).data("parent")).find(".collapse.show");

  // altura do topo
  var additionalOffset = 200;

  if ($card.prevAll().filter($open.closest(".card")).length !== 0) {
    additionalOffset = $open.height();
  }

  $("html,body").animate(
    {
      scrollTop: $card.offset().top - additionalOffset,
    },
    500
  );
});

$(".collapse").on("hidden.bs.collapse", function () {
  $(this).prev().removeClass("active");
});

// -------------------------------------------
// NAV - SIDEBAR -
// -------------------------------------------

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
