class Sliding {

	/** @type {Phaser.GameObjects.Sprite} */
	fella;

	/** @type {Phaser.Scene} */
	scene;

	/** reference to StateController class, used to call transition() */
	stateControl;
	
	constructor(fella, scene) {

		this.fella = fella;
		this.scene = scene;

	}
	
	enter() {
		
	}
	
	update() {
		
		// rotate if dead
		if (!this.fella.getData('alive')) {

			this.fella.setAngle(this.fella.angle += 30);
		}
		
		// when stopped, go to idle or dead state
		if (this.fella.body.velocity.x < 1 && this.fella.body.velocity.x > -1 
			&& this.fella.body.velocity.y < 1 && this.fella.body.velocity.y > -1) {

			if (!this.fella.getData('alive')) {
				
				this.stateControl.setState('dead');
			}
			else {
				
				this.stateControl.setState('idle');
			}
		}
	}
}
