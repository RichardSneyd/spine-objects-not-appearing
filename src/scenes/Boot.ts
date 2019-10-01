import Base from './Base';
import {CONST} from '../CONST/CONST';

    export class Boot extends Base {

        constructor() {
            super(CONST.KEYS.SCENES.BOOT);
        }

        preload() {
            //  this.load.scenePlugin('SpinePlugin');
            //  this.load.scenePlugin('spine');

            
        }

        create() {
            this.scene.start('MainMenu');
        }
    }


