///<reference path='../../types/phaser.d.ts' />

import { CONST } from "../CONST/CONST";
import Utils from "../Generic/Utils";


export default class Base extends Phaser.Scene {
    static pack: Phaser.Types.Loader.FileTypes.PackFileConfig = {
        //@ts-ignore
        files: [
            { type: 'scenePlugin', key: 'SpinePlugin', url: 'libs/SpinePlugin.min.js', sceneKey: 'spine' }
        ]
    }

    constructor(key: string) {
        super({ key: key, pack: Base.pack });
    }

    preload() {

        //  this.load.scenePlugin('SpinePlugin');
        //  this.load.scenePlugin('spine');

    }

    update(){
    //    this.children.sort('y');
    }

    create() {
        this.scene.start('MainMenu');
    }
}

