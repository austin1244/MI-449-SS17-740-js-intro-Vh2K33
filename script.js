(function(){
  var soundMixer = {
    init: function(){
      $("button").mouseenter(soundMixer.play)
      $("button").click(soundMixer.play)
    },
    play: function(e){ 
      var sound = $(this).data("sound")
      console.log("play "+ sound)
      $("#"+sound)[0].play()
    }
  }
  $(document).ready(soundMixer.init)
})()
