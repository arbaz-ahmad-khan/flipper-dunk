window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 1080,
    height: 1920,
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'matter',
      arcade: {
        debug: false
      },
      matter: {
        gravity: {
          x: 0,
          y: 1
        },
        debug: false,
      }
    },

  });

  game.scene.add("Preload", Preload);
  game.scene.add("OneLevel", OneLevel);
  game.scene.add("TwoLevel", TwoLevel);
  game.scene.add("ThreeLevel", ThreeLevel);
  game.scene.add("TryAgain", TryAgain);
  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");

    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
