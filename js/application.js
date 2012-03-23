
define(['mediator', 'controllers/application_controller', 'lib/router'], function(mediator, ApplicationController, Router) {
  'use strict';
  var Application;
  Application = {
    initialize: function() {
      this.initControllers();
      this.initRouter();
    },
    initControllers: function() {
      return new ApplicationController();
    },
    initRouter: function() {
      mediator.router = new Router();
      return typeof Object.defineProperty === "function" ? Object.defineProperty(mediator, 'router', {
        writable: false
      }) : void 0;
    }
  };
  if (typeof Object.freeze === "function") Object.freeze(Application);
  return Application;
});
