// SongQueue.js - Defines a backbone model class for the song queue.
//Songs is a backbone.Collection
var SongQueue = Songs.extend({

  initialize: function(){
    for (var i=0; i < arguments.length; i++){
      var song = arguments[i];
      this.push(song);

    }
    this.on("add", function(song){
      if (this.length === 1){
        this.playFirst();
      }
    });
    this.on("ended", function(song){
      this.shift();
      if (this.length){
        this.playFirst();
      }
    });
    this.on("dequeue",function(){
      //this.shift();
      this.remove(this.at(0));

      if(this.length){
        this.playFirst();
      }
    });



  },
  playFirst: function(){
    this.at(0).play();
  },


});
