var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['controllers/controller', 'views/application_view'], function(Controller, ApplicationView) {
  'use strict';
  var ApplicationController;
  return ApplicationController = (function(_super) {

    __extends(ApplicationController, _super);

    function ApplicationController() {
      ApplicationController.__super__.constructor.apply(this, arguments);
    }

    ApplicationController.prototype.initialize = function() {
      return this.initApplicationView();
    };

    ApplicationController.prototype.initApplicationView = function() {
      return new ApplicationView();
    };

    return ApplicationController;

  })(Controller);
});
