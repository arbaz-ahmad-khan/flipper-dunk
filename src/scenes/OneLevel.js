let lastFailedLevelKey = null;
// You can write more code here
var X = 670;
var Y = 1500;
var LEVER = 54;
// var WIDTH = 112;
var WIDTH = 300;
var HEIGHT = 32;
var STIFFNESS = 0.3;
var MIN = Phaser.Math.DegToRad(2);
var MAX = Phaser.Math.DegToRad(-45);
/* START OF COMPILED CODE */

class OneLevel extends Phaser.Scene {

	constructor() {
		super("OneLevel");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.progressInterval = null;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// wall
		const wall = this.add.image(373, 1378, "wall");
		wall.flipX = true;

		// text_1
		const text_1 = this.add.text(540, 79, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Level 1";
		text_1.setStyle({ "fontSize": "50px", "fontStyle": "bold" });

		// goalsContainer
		const goalsContainer = this.add.container(0, -1);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(886, 755, 100, 80);
		rectangle_3.name = "rectangle_3";
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 65280;
		goalsContainer.add(rectangle_3);

		// obstaclesContainer
		const obstaclesContainer = this.add.container(0, -1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(540, -1, 1080, 50);
		rectangle_2.isFilled = true;
		obstaclesContainer.add(rectangle_2);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(540, 1919, 1080, 50);
		rectangle_1.isFilled = true;
		obstaclesContainer.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(0, 959, 50, 1920);
		rectangle.isFilled = true;
		obstaclesContainer.add(rectangle);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1080, 959, 50, 1920);
		rectangle_4.isFilled = true;
		obstaclesContainer.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(542.7725219726562, 1931.7620849609375, 1080, 50);
		rectangle_5.isFilled = true;
		obstaclesContainer.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(57, 1213, 50, 200);
		rectangle_6.visible = false;
		rectangle_6.isFilled = true;
		obstaclesContainer.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(75, 1241, 50, 200);
		rectangle_7.visible = false;
		rectangle_7.isFilled = true;
		obstaclesContainer.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(84, 1270, 50, 200);
		rectangle_8.visible = false;
		rectangle_8.isFilled = true;
		obstaclesContainer.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(101, 1292, 50, 200);
		rectangle_9.visible = false;
		rectangle_9.isFilled = true;
		obstaclesContainer.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(111, 1318, 50, 200);
		rectangle_10.visible = false;
		rectangle_10.isFilled = true;
		obstaclesContainer.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(124, 1340, 50, 200);
		rectangle_11.visible = false;
		rectangle_11.isFilled = true;
		obstaclesContainer.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(149, 1361, 50, 200);
		rectangle_12.visible = false;
		rectangle_12.isFilled = true;
		obstaclesContainer.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(164, 1382, 50, 200);
		rectangle_13.visible = false;
		rectangle_13.isFilled = true;
		obstaclesContainer.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(186, 1397, 50, 200);
		rectangle_14.visible = false;
		rectangle_14.isFilled = true;
		obstaclesContainer.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(207, 1418, 50, 200);
		rectangle_15.visible = false;
		rectangle_15.isFilled = true;
		obstaclesContainer.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(222, 1430, 50, 200);
		rectangle_16.visible = false;
		rectangle_16.isFilled = true;
		obstaclesContainer.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(243, 1441, 50, 200);
		rectangle_17.visible = false;
		rectangle_17.isFilled = true;
		obstaclesContainer.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(263, 1455, 50, 200);
		rectangle_18.visible = false;
		rectangle_18.isFilled = true;
		obstaclesContainer.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(288, 1468, 50, 200);
		rectangle_19.visible = false;
		rectangle_19.isFilled = true;
		obstaclesContainer.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(319, 1482, 50, 200);
		rectangle_20.visible = false;
		rectangle_20.isFilled = true;
		obstaclesContainer.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(334, 1495, 50, 200);
		rectangle_21.visible = false;
		rectangle_21.isFilled = true;
		obstaclesContainer.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(357, 1508, 50, 200);
		rectangle_22.visible = false;
		rectangle_22.isFilled = true;
		obstaclesContainer.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(385, 1517, 50, 200);
		rectangle_23.visible = false;
		rectangle_23.isFilled = true;
		obstaclesContainer.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(406, 1529, 50, 200);
		rectangle_24.visible = false;
		rectangle_24.isFilled = true;
		obstaclesContainer.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(432, 1536, 50, 200);
		rectangle_25.visible = false;
		rectangle_25.isFilled = true;
		obstaclesContainer.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(461, 1546, 50, 200);
		rectangle_26.visible = false;
		rectangle_26.isFilled = true;
		obstaclesContainer.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(491, 1552, 50, 200);
		rectangle_27.visible = false;
		rectangle_27.isFilled = true;
		obstaclesContainer.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(519, 1560, 50, 200);
		rectangle_28.visible = false;
		rectangle_28.isFilled = true;
		obstaclesContainer.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(554, 1566, 50, 200);
		rectangle_29.visible = false;
		rectangle_29.isFilled = true;
		obstaclesContainer.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(575, 1572, 50, 200);
		rectangle_30.visible = false;
		rectangle_30.isFilled = true;
		obstaclesContainer.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(613, 1578, 50, 200);
		rectangle_31.visible = false;
		rectangle_31.isFilled = true;
		obstaclesContainer.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(628, 1585, 50, 200);
		rectangle_32.visible = false;
		rectangle_32.isFilled = true;
		obstaclesContainer.add(rectangle_32);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(39, 1197, 50, 200);
		rectangle_36.visible = false;
		rectangle_36.isFilled = true;
		obstaclesContainer.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(31, 1176, 50, 200);
		rectangle_37.visible = false;
		rectangle_37.isFilled = true;
		obstaclesContainer.add(rectangle_37);

		// rectangle_38
		const rectangle_38 = this.add.rectangle(21, 1151, 50, 200);
		rectangle_38.visible = false;
		rectangle_38.isFilled = true;
		obstaclesContainer.add(rectangle_38);

		// rectangle_39
		const rectangle_39 = this.add.rectangle(10, 1136, 50, 200);
		rectangle_39.visible = false;
		rectangle_39.isFilled = true;
		obstaclesContainer.add(rectangle_39);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(795, 709, 50, 200);
		rectangle_33.visible = false;
		rectangle_33.isFilled = true;
		obstaclesContainer.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(896, 836, 250, 50);
		rectangle_34.visible = false;
		rectangle_34.isFilled = true;
		obstaclesContainer.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(708, 501, 40, 40);
		rectangle_35.visible = false;
		rectangle_35.isFilled = true;
		obstaclesContainer.add(rectangle_35);

		// rectangle_40
		const rectangle_40 = this.add.rectangle(1042, 505, 40, 40);
		rectangle_40.visible = false;
		rectangle_40.isFilled = true;
		obstaclesContainer.add(rectangle_40);

		this.goalsContainer = goalsContainer;
		this.obstaclesContainer = obstaclesContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	goalsContainer;
	/** @type {Phaser.GameObjects.Container} */
	obstaclesContainer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.timerReverse();
		this.tweener = { x: MIN, };
		this.matter.world.setBounds(0, 0, 1080, 1920);
		this.setObstacles();
		this.setGoalProperties();

		// back-net
		const net1 = this.add.image(886, 640, "backward-Net");
		net1.scaleX = 0.7;
		net1.scaleY = 0.7;

		// ball
		this.ballSprite = this.matter.add.image(800, 1100, "ball", null, {
			restitution: 1.2,
			shape: {
				type: "circle",
				radius: 50.5,
			},
			checkCollision: {
				up: true,
				down: true,
				left: true,
				right: true,
			},
		}).setScale(0.8).setBounce(0.8);

		// front-net
		const net_1 = this.add.image(886, 640, "Net-1");
		net_1.scaleX = 0.7;
		net_1.scaleY = 0.7;

		// flipper
		const rectangle = this.add.rectangle(X, Y, WIDTH, HEIGHT, 0x0000ff).setScale(1);
		this.add.existing(rectangle);
		const body = this.matter.add.gameObject(rectangle, {
			friction: 1,
		});
		this.matter.add.worldConstraint(body, 0, 1, {
			pointA: new Phaser.Math.Vector2(X, Y),
			pointB: new Phaser.Math.Vector2((WIDTH - HEIGHT) / 2, 0),
		});
		this.lever = this.matter.add.image(X - Math.cos(this.tweener.x) * LEVER, Y - Math.sin(this.tweener.x) * LEVER, null, null,
			{
				isSensor: true,
				isStatic: true,
			}
		).setVisible(false);
		this.matter.add.constraint(body, this.lever.body, 0, STIFFNESS, {
			pointA: new Phaser.Math.Vector2((WIDTH - HEIGHT) / 2 + LEVER, 0),
			pointB: new Phaser.Math.Vector2(),
		});
		const space = this.input.keyboard.addKey("Space");
		space.on("down", () => this.flip(true));
		space.on("up", () => this.flip(false));
		this.input.on('pointerdown', () => this.flip(true));
		this.input.on('pointerup', () => this.flip(false));
	}

	setGoalProperties() {
		this.goals = [];
		this.goalsContainer.iterate((child) => {
			this.goals.push(child);
		});
	}

	handleBallOverlapGoal() {
		console.log("goal");
		this.ballSprite.setPosition(886, 1100);
		this.ballSprite.setVelocity(0);
		clearInterval(this.progressInterval);
		this.scene.stop("OneLevel");
		this.scene.start("TwoLevel");
	}

	setObstacles() {
		this.staticObstacles = [];
		this.obstaclesContainer.iterate((child) => {
			this.staticObstacles.push(this.matter.add.gameObject(child, { isStatic: true }));
		});
	}

	flip(isDown) {
		this.tweens.add({
			targets: [this.tweener],
			x: isDown ? MAX : MIN,
			duration: 50,
			onUpdateScope: this,
			onUpdate: function () {
				this.lever.setPosition(
					X - Math.cos(this.tweener.x) * LEVER,
					Y - Math.sin(this.tweener.x) * LEVER
				);
			},
		});
	}

	update() {
		// if (this.ballSprite.y > 700) {
		// 	this.goalsContainer.setVisible(false);
		// } else if (this.ballSprite.y < 600) {
		// 	this.goalsContainer.setVisible(true);
		// }

		if (Math.abs(this.ballSprite.y) > 1800) {
			this.ballSprite.setPosition(886, 900);
			this.ballSprite.setVelocity(0);
			clearInterval(this.progressInterval);
			lastFailedLevelKey = this.sys.settings.key;
			this.scene.stop("OneLevel");
			this.scene.start("TryAgain");
		}

		if (this.ballSprite.scaleX !== 0) {
			for (const goal of this.goals) {
				if (Phaser.Geom.Intersects.RectangleToRectangle(this.ballSprite.getBounds(), goal.getBounds())) {
					if (this.ballSprite.y < goal.y) {
						this.handleBallOverlapGoal();
					}
					return;
				}
			}
		}
	}

	timerReverse() {
		this.outerBar = this.add.sprite(540, 150, "Loading-outer");
		this.outerBar.setOrigin(0.5);
		this.innerBar = this.add.sprite(540 / 2 + 17, 150, "Loading-bar").setScale(1, 1.1);
		this.innerBar.setOrigin(0, 0.5);
		this.innerBar.setVisible(true);
		this.innerBarWidth = this.innerBar.displayWidth;
		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(this.innerBar.x, this.innerBar.y - this.innerBar.displayHeight / 2, this.innerBar.displayWidth, this.innerBar.displayHeight);
		this.loadingBall = this.add.sprite(this.innerBar.x + this.innerBarWidth, this.innerBar.y, "loadingBall").setScale(1);
		this.loadingBall.setOrigin(0, 0.5);
		this.innerBar.setMask(this.maskGraphics.createGeometryMask());
		const loadingDuration = 50000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = numIntervals;
		const progressDecrement = 1 / numIntervals;
		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressDecrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(this.innerBar.x, this.innerBar.y - this.innerBar.displayHeight / 2, this.innerBarWidth * currentProgress, this.innerBar.displayHeight);
			this.loadingBall.x = (this.innerBarWidth - 60) * currentProgress + 280;
			currentInterval--;
			if (currentProgress <= 0) {
				clearInterval(this.progressInterval);
				lastFailedLevelKey = this.sys.settings.key;
				this.scene.stop("OneLevel");
				this.scene.start("TryAgain");
			}
		};
		this.progressInterval = setInterval(updateProgressBar, intervalDuration);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
