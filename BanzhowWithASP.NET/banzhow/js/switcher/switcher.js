function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

$(function(){

  if(getCookie('theme') && (getCookie('theme') != 'default') ){
    $('head').append('<link href="css/themes/'+getCookie('theme')+'.css" rel="stylesheet" id="theme-stylesheet">');
  }

  $(".switcher-btn").on("click", function(event) {
    event.preventDefault();
    if($("#switcher-options").css('left') == '0px'){
      $("#switcher-options").animate({left: '-176px'}, 500);
    }
    else{
      $("#switcher-options").animate({left: 0}, 500);
    }
  });

  $(".theme-colour").on('click', function(event) {
    event.preventDefault();

    var theme = $(this).attr('data-name');

    setCookie('theme', theme);

    $("#theme-stylesheet").remove();

    if(theme != 'default'){
      $('head').append('<link href="css/themes/'+theme+'.css" rel="stylesheet" id="theme-stylesheet">');
    }

  });
  
});