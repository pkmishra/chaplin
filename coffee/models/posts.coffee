define [
  'mediator', 'models/collection', 'models/post'
], (mediator, Collection, Post) ->
  'use strict'

  class Posts extends Collection
    model: Post

    initialize: ->
      super

      # Mixin a Deferred
      _(this).extend $.Deferred()

      @getPosts()

    getPosts: ->
      #console.debug 'Posts#getPosts'

      @trigger 'loadStart'

      $.ajax
        url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=ladygaga&callback=?'
        dataType: 'json'
        success: @processPosts

    processPosts: (posts) =>
      #console.debug 'Posts#processPosts', response, response.data

      # Trigger before updating the collection to hide the loading spinner
      @trigger 'load'

      # Update the collection
      @reset posts

      # Resolve the Deferred
      @resolve()
