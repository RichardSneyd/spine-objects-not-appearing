import SpineObject from './SpineObject';

export default class HideRevealSpineObject extends SpineObject {
    callback: Function;
    callbackContext: any;

    constructor(scene: Phaser.Scene, x: number, y: number, key: string, container: Phaser.GameObjects.Container, callback: Function, callbackContext: any) {
        super(scene, x, y, key, container, 'bear_hide', false);
        this.callback = callback;
        this.callbackContext = callbackContext;
        this.spine.on('pointerdown', this.revealOnce, this);
        this.spine.setToSetupPose();
        this.hide();
    }

    revealOnce() {
        this.reveal();
        this.spine.input.enabled = false;
        this.spine.removeListener('pointerdown', this.revealOnce);
        this.callback(this, this.callbackContext);
    }

    reveal() {
        this.spine.setAnimation(this.track, 'bear_reveal');
    }

    hide() {
        this.spine.setAnimation(this.track, 'bear_hide');
    }


}