define [
  'jquery',
  'underscore',
  'mediator'
], ($, _, mediator) ->
  'use strict'

  # Utilities
  # ---------

  utils =

    # Object Helpers
    # --------------

    beget: do ->
      if typeof Object.create is 'function'
        (obj) ->
          Object.create(obj)
      else
        ctor = ->
        (obj) ->
          ctor:: = obj
          new ctor

    # String Helpers
    # --------------

    # camel-case-helper > camelCaseHelper
    camelize: do ->
      regexp = /[-_]([a-z])/g
      camelizer = (match, c) ->
        c.toUpperCase()
      (string) ->
        string.replace regexp, camelizer

    # Upcase the first character
    upcase: (str) ->
      str.charAt(0).toUpperCase() + str.substring(1)

    # underScoreHelper -> under_score_helper
    underscorize: (string) ->
      string.replace /[A-Z]/g, (char, index) ->
        (if index isnt 0 then '_' else '') + char.toLowerCase()

    # Event handling helpers
    # ----------------------

    # Returns whether a modifier key is pressed during a keypress or mouse click
    modifierKeyPressed: (event) ->
      event.shiftKey or event.altKey or event.ctrlKey or event.metaKey

  # Finish
  # ------

  # Seal the utils object
  Object.seal? utils

  utils
