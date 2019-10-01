///<reference path='../../types/phaser.d.ts' />
import Base from './Base';
import { CONST } from '../CONST/CONST';
import Utils from '../Generic/Utils';
import BottomBar from '../HUD/BottomBar';
import Professor from '../objects/Professor';

export default class BaseGame extends Base {
    actAudio: string[];
    actGraphics: string[];
    actSpines: string[];
    actScriptId: string;
    actScript: any;
    components: any;
    bgSprite: Phaser.GameObjects.Sprite;
    bottomBar: BottomBar;

    background: Phaser.GameObjects.Container;
    playground: Phaser.GameObjects.Container;
    foreground: Phaser.GameObjects.Container;
    HUD: Phaser.GameObjects.Container;
    professor: Professor;

    // the columns in the activity script to 'parse' for image and audio lazy-loading. Leave empty if none
    protected graphicCols: string[];
    protected audioCols: string[];

    constructor(key: string, audioCols: string[], graphicCols: string[]) {
        super(key);
        this.actScriptId = key;
        this.audioCols = audioCols;
        this.graphicCols = graphicCols;
    }

    preload() {
        super.preload();
        this.load.setPath(CONST.PATHS.ACTIVITY_SCRIPTS);
        this.load.json(this.scene.key, this.scene.key + '.json');
        let scriptCompleteEventKey: string = 'filecomplete-json-' + this.scene.key;

        this.load.setPath(CONST.PATHS.SPINE);
        this.load.spine('professor', 'professor.json', 'professor.atlas');
        this.load.on(scriptCompleteEventKey, function () {
            this.loadAfterJSON();
        }, this);

        this.load.on('complete', function (this: any) {
            console.log('preload complete');
        }, this);
    }

    loadAfterJSON() {
        // this is called once the activity script json is loaded, so related assets can be lazy-loader here
        this.actScript = this.cache.json.get(this.scene.key);
        this.components = Utils.getObjFromRawText(this.actScript[0].components);
        console.log(this.components);

        // load graphics
        this.load.setPath(CONST.PATHS.GRAPHICS);
        this.load.image('bg', this.components.bgd + ".png");
        this.load.image(CONST.UI.BAR_TEXTURE, CONST.UI.BAR_TEXTURE + '.jpg')

        //      only load graphics from specified columns, or do nothing
        if (this.graphicCols.length > 0) {
            this.actGraphics = Utils.getAllEntriesFromCols(this.actScript, this.graphicCols);
            for (let x = 0; x < this.actGraphics.length; x++) {
                //  var graphic = CommonAssets.graphics[index];
                let filename = this.actGraphics[x] + '.png';
                this.load.image(this.actGraphics[x], filename);
            }
        }

        // load audio
        this.load.setPath(CONST.PATHS.AUDIO);
        // only load audio from specified columns, or do nothing
        if (this.audioCols.length > 0) {
            this.actAudio = Utils.getAllEntriesFromCols(this.actScript, this.audioCols);
            this.actAudio.forEach(function (this: any, item: string, index: number) {
                console.log(item);
                console.log(this.load.path);
                this.load.audio(item, [
                    "mp3/" + item + ".mp3",
                    "ogg/" + ".ogg"
                ]);
            }, this);
        }

    }
    create() {
        this.background = this.add.container(0, 0)
        this.playground = this.add.container(0, 0);
        this.foreground = this.add.container(0, 0);
        this.HUD = this.add.container(0, 0);


        this.background.add(this.bgSprite = this.add.sprite(this.game.canvas.width / 2, this.game.canvas.height / 2, 'bg'));
        this.professor = new Professor(this, this.foreground);
        this.createHUD();
    }

    createHUD() {
        this.bottomBar = new BottomBar(this, CONST.UI.BAR_TEXTURE);
    }
}

