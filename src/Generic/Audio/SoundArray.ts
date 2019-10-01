

export default class SoundArray {
    scene: Phaser.Scene;
    all_ids: string[] = [];
    active: Phaser.Sound.BaseSound;
    callBack: Function;
    callBackContext: any;


    constructor(scene: Phaser.Scene, all_ids: string[], startIndex: number, callBack?: Function, callBackContext?: Phaser.Scene, canSkip?: boolean) {
        this.scene = scene;
        this.all_ids = all_ids;
        this.callBack = callBack;
        this.callBackContext = callBackContext;
        this.playArrayFromIndex(scene, startIndex, callBack, callBackContext);
    }

    playArrayFromIndex(scene: Phaser.Scene, index: number, callBack?: Function, callBackContext?: Phaser.Scene) {
        let sound = scene.sound.add(this.all_ids[index]);
        sound.play();
        sound.on('stop', function (this: any) {
            // todo
            if (this.index < this.all_ids.length) {
                this.playArrayFromIndex(scene, index + 1, callBack, callBackContext);
            }
            else {
                callBack(callBackContext);
            }
        }, this);
    }
}

