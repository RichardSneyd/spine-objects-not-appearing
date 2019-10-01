import SoundArray from './SoundArray';

export default class AudioManager {
    static lowSongVol: number = 0.5;

    static playArrayHard(scene: Phaser.Scene, index: number, audio: string[], callBack?: Function, callBackContext?: any, canSkip?: boolean) {
        // let config: Phaser.Types.Time.

        scene.time.addEvent({
            delay: 10, callback: function (this: any) {
                if (this.activeArray != null) {
                    this.activeArray.destroy();
                    this.activeArray = null;
                    delete this.activeArray;
                    /*   scene.time.events.add(1, function (this: any) {
  
                      }, this); */
                }

                AudioManager.changeSongVolume(AudioManager.lowSongVol);
                this.activeArray = new SoundArray(scene, audio, index, callBack, callBackContext, canSkip);
            }, callbackScope: this
        });
    }

    static changeSongVolume(vol: number) {

    }
}

