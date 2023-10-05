
// You can write more code here

/* START OF COMPILED CODE */

class TryAgain extends Phaser.Scene {

	constructor() {
		super("TryAgain");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// playAgain
		const playAgain = this.add.text(540, 1377, "", {});
		playAgain.setOrigin(0.5, 0.5);
		playAgain.text = "TRY AGAIN";
		playAgain.setStyle({ "fontSize": "80px" });

		// ball
		const ball = this.add.image(540, 960, "ball");
		ball.scaleX = 2;
		ball.scaleY = 2;

		this.playAgain = playAgain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	playAgain;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.playAgain.setInteractive().on("pointerdown", () => {
			this.scene.stop('TryAgain');
			this.scene.start(lastFailedLevelKey);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
