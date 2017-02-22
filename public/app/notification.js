(function() {
  app.notification = { };

  function loopSound(sound) {
    sound.play({
      volume: 15,
      onfinish: function() {
        loopSound(sound);
      }
    });
  }

  window.soundManager.setup({
    debugMode: false,
    useFlashBlock: false,
    useHighPerformance: true,
    flashVersion: 9,
    url: '/bower_components/soundmanager/swf/',
    onready: function() {
      app.notification.sounds = { };
      app.notification.sounds["deathfromabove-me"] = soundManager.createSound("deathfromabove-me", "/public/sounds/deathfromabove-me.mp3");
      app.notification.sounds["deathfromabove-them"] = soundManager.createSound("deathfromabove-them", "/public/sounds/deathfromabove-them.mp3");
      app.notification.sounds["suicide-them"] = soundManager.createSound("suicide-them", "/public/sounds/suicide-them.mp3");
      app.notification.sounds["counter-me"] = soundManager.createSound("counter-me", "/public/sounds/counter-me.mp3");
      app.notification.sounds["counter-them"] = soundManager.createSound("counter-them", "/public/sounds/counter-them.mp3");
      app.notification.sounds["headshot-me"] = soundManager.createSound("headshot-me", "/public/sounds/headshot-me.mp3");
      app.notification.sounds["headshot-them"] = soundManager.createSound("headshot-them", "/public/sounds/headshot-them.mp3");
      app.notification.sounds["killstreak-them"] = soundManager.createSound("killstreak-them", "/public/sounds/killstreak-them.mp3");
      app.notification.sounds["killstreak-3"] = soundManager.createSound("killstreak-3", "/public/sounds/killstreak-3.mp3");
      app.notification.sounds["killstreak-6"] = soundManager.createSound("killstreak-6", "/public/sounds/killstreak-6.mp3");
      app.notification.sounds["killstreak-9"] = soundManager.createSound("killstreak-9", "/public/sounds/killstreak-9.mp3");
      app.notification.sounds["killstreak-12"] = soundManager.createSound("killstreak-12", "/public/sounds/killstreak-12.mp3");
      app.notification.sounds["killstreak-15"] = soundManager.createSound("killstreak-15", "/public/sounds/killstreak-15.mp3");

      // jump sounds
      app.notification.sounds.jump = [];
      app.notification.sounds.jump.push(soundManager.createSound("jump1", "/public/sounds/serious/0601.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump2", "/public/sounds/serious/0602.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump3", "/public/sounds/serious/0603.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump4", "/public/sounds/serious/0604.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump5", "/public/sounds/serious/0605.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump6", "/public/sounds/serious/0606.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump7", "/public/sounds/serious/0607.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump8", "/public/sounds/serious/0608.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump9", "/public/sounds/serious/0609.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump10", "/public/sounds/serious/0610.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump11", "/public/sounds/serious/0611.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump12", "/public/sounds/serious/0612.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump13", "/public/sounds/serious/0613.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump14", "/public/sounds/serious/0614.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump15", "/public/sounds/serious/0615.mp3"));
      app.notification.sounds.jump.push(soundManager.createSound("jump16", "/public/sounds/serious/0616.mp3"));

      // death sounds
      app.notification.sounds.death = [];
      app.notification.sounds.death.push(soundManager.createSound("death1", "/public/sounds/serious/06D1.mp3"));
      app.notification.sounds.death.push(soundManager.createSound("death2", "/public/sounds/serious/06D2.mp3"));
      app.notification.sounds.death.push(soundManager.createSound("death3", "/public/sounds/serious/06D3.mp3"));
      app.notification.sounds.death.push(soundManager.createSound("death4", "/public/sounds/serious/06D4.mp3"));

      // game soundtrack
      loopSound(soundManager.createSound("soundtrack", "/public/sounds/serious/06L.mp3"));
    },
    defaultOptions: {
      volume: 50
    }
  });

  var stageHeight = 700;
  var maxWidth = 2000;
  var notificationQueue = [];
  var jumpIndex = 0;

  function popMessage() {
    var notification = notificationQueue.pop();

    if(notification) {
      var div = $("<div id='#notification'>" + notification.message + "</div>");
      var width = $("#stage").width();
      var left = $("#stage").position().left;

      if(width > maxWidth) width = maxWidth;

      div.prependTo("body");
      div.css({
        left: width / 2 + left - 150,
        top: 20
      });

      div.addClass("message animated bounceIn");
      app.notification.sounds[notification.sound].play();

      setTimeout(function() {
        div.removeClass("bounceIn");
        div.addClass("bounceOut");
        setTimeout(function() { div.remove(); }, 1000);
      }, 1000);
    }
  }

  function queue(notification) {
    notificationQueue.push(notification);
  }

  function playSound(name) {

  }

  function playNextJumpSound() {
    app.notification.sounds.jump[jumpIndex].play({ volume: 30 });
    jumpIndex++;
    if (jumpIndex == app.notification.sounds.jump.length) jumpIndex = 0;
  }

  setInterval(popMessage, 1000);

  app.notification.queue = queue;
  app.notification.playNextJumpSound = playNextJumpSound;
})();
