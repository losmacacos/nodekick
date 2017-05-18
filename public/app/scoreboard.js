(function() {
  function init() {
    app.game.scoresReceived = function(scores) {
      $("#playerscores").empty();
      _.each(scores, score => {
        killText = score.kills == 1 ? " kill " : " kills ";
        hsText = score.headshots == 1 ? " headshot! " : " headshots! ";
        if(score.headshots > 0){
          $("<div class='score'></div>").text(score.name + ": " + score.kills + killText + score.headshots + hsText).prependTo("#playerscores");
        } else {
          $("<div class='score'></div>").text(score.name + ": " + score.kills + killText).prependTo("#playerscores");
        }
      });
    };
  }

  app.scoreboard = { };
  app.scoreboard.init = init;
})();
