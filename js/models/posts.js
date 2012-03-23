var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['mediator', 'models/collection', 'models/post'], function(mediator, Collection, Post) {
  'use strict';
  var Posts;
  return Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts() {
      this.processPosts = __bind(this.processPosts, this);
      Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.prototype.model = Post;

    Posts.prototype.initialize = function() {
      Posts.__super__.initialize.apply(this, arguments);
      _(this).extend($.Deferred());
      return this.getPosts();
    };

    Posts.prototype.getPosts = function() {
      this.trigger('loadStart');
      return $.ajax({
        url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=ladygaga&callback=?',
        dataType: 'json',
        success: this.processPosts
      });
    };

    Posts.prototype.processPosts = function(posts) {
      this.trigger('load');
      this.reset(posts);
      return this.resolve();
    };

    return Posts;

  })(Collection);
});
