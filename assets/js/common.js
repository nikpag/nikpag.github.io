$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });

  const updateNewsScrollbar = function($scroller) {
    const scroller = $scroller.get(0);
    const $indicator = $scroller.siblings(".news-scrollbar-indicator");
    const $thumb = $indicator.find("span");

    if (!scroller || !$thumb.length) {
      return;
    }

    const scrollHeight = scroller.scrollHeight;
    const clientHeight = scroller.clientHeight;

    if (scrollHeight <= clientHeight) {
      $indicator.hide();
      return;
    }

    $indicator.show();
    const trackHeight = $indicator.height();
    const thumbHeight = Math.max(Math.round(trackHeight * clientHeight / scrollHeight), 32);
    const maxThumbTop = trackHeight - thumbHeight;
    const maxScrollTop = scrollHeight - clientHeight;
    const thumbTop = maxScrollTop > 0 ? Math.round(scroller.scrollTop / maxScrollTop * maxThumbTop) : 0;

    $thumb.css({
      height: thumbHeight + "px",
      transform: "translateY(" + thumbTop + "px)",
    });
  };

  const $newsScrollers = $(".news-scrollable");
  $newsScrollers.each(function() {
    const $scroller = $(this);
    updateNewsScrollbar($scroller);
    $scroller.on("scroll", function() {
      updateNewsScrollbar($scroller);
    });
  });
  $(window).on("load resize", function() {
    $newsScrollers.each(function() {
      updateNewsScrollbar($(this));
    });
  });
});
