import SpineObject from "./SpineObject";


export default class Professor extends SpineObject {
    static xOffset: number = 100;
    static yOffset: number = 100;

    constructor(scene: Phaser.Scene, container: Phaser.GameObjects.Container) {
        super(scene, Professor.xOffset, scene.game.canvas.height - Professor.yOffset, 'professor', container);
    }

    idle(){
        this.spine.setAnimation(this.track, 'idle', true);
    }
    
    success(){
        this.spine.setAnimation(this.track, 'success', true);
    }
    
    think(){
        this.spine.setAnimation(this.track, 'think', true);
    }
}