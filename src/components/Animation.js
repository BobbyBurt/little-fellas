
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Animation {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Animation"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {Animation} */
	static getComponent(gameObject) {
		return gameObject["__Animation"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	animationKey = "";

	/* START-USER-CODE */

	start() {

		this.gameObject.play(this.animationKey);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
