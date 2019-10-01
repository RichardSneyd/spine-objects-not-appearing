

export default class BottomBar extends Phaser.GameObjects.Sprite {
   // protected scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, texture: string){
        super(scene, scene.game.canvas.width / 2, scene.game.canvas.height, texture);
        this.setOrigin(0.5, 1);

        this.createButtons();
        this.scene.add.existing(this);
    }

    createButtons(){

    }
}