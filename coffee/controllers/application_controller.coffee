define [
  'controllers/controller', 'views/application_view'
], (Controller, ApplicationView) ->
  'use strict'

  class ApplicationController extends Controller
    initialize: ->
      @initApplicationView()

    initApplicationView: ->
      new ApplicationView()
