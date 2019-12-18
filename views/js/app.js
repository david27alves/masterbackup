"use strict";

(function() {
  function init() {
    var router = new Router([
      new Route("home", "home.html", true),
      new Route("agendamento", "agendamento.html"),
      new Route("configuracoes", "configuracoes.html")
    ]);
  }
  init();
})();
