// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on("add", this.render);
    this.collection.on("remove", this.render);
  },

  render: function() {
    _.each(this.collection, function(song){
      new SongQueueEntryView(song);
    });
    //return this.$el
  }

});
