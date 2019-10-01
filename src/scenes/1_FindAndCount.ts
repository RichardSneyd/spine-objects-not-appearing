import BaseGame from './BaseGame';
import HiddenObject from '../objects/HideReveal';
import { CONST } from '../CONST/CONST';

export default class FindAndCount extends BaseGame {
  objectCount: number;
  objectsFound: number;
  objectConfig: any[];
  objects: Array<HiddenObject>;
  numberLabels: Array<Phaser.GameObjects.Sprite> = [];
  counterPrefix: string = 'reveal_bears_numbers_000';

  constructor(key: string, objectConfig: any[]) {
    super(key, ['audio_id'], []);
    this.objectConfig = objectConfig;
    this.objectCount = objectConfig.length;
    this.objectsFound = 0;
    this.objects = [];
  }

  init() {

  }

  preload() {
    // don't load activity script assets here, use loadAfterJSON
    super.preload();
  }

  loadAfterJSON(){
    // use this to load assets based on the activity script
    super.loadAfterJSON();
    this.load.setPath(CONST.PATHS.GRAPHICS);

   this.loadCountMarkers();

   // this.load.image('gateway', 'park_gateway.png');
    
    this.load.setPath(CONST.PATHS.SPINE);
   // console.log('spine path should be ' + CONST.PATHS.SPINE);
    
    this.loadObjects();

    this.load.setPath('spine/');
    this.load.spine('goblin', 'goblins-ess.json', 'goblins-ess.atlas');

  }

  loadCountMarkers(){
    for(let x = 1; x < 6; x++){
      let key = this.counterPrefix + x;
      this.load.image(key, key + '.png');
    }
  }

  loadObjects(){
    this.load.setPath(CONST.PATHS.SPINE);
    for(let x = 0; x < this.objectConfig.length; x++){
      let conf = this.objectConfig[x];
      this.load.spine(conf.key, conf.key + '.json', [conf.key + '.atlas']);
    }
  }

  create() {
    super.create();
  
    // this.add.sprite
    let x = this.game.canvas.width / 2;
    let y = this.game.canvas.height / 2;
   
   /*  this.input.on('pointerdown', function (this: FindAndCount) {
      this.newActor();
    }, this); */

  //  this.add.spine(800, 500, 'goblin', 'walk', true);
    this.createObjects();
  }


  createObjects(){
    for(let x = 0; x < this.objectConfig.length; x++){
      let conf = this.objectConfig[x];
      this.objects.push(new HiddenObject(this, conf.x, conf.y, conf.key, this.playground, this.objectFound.bind(this), this));
    }
  }

  objectFound(object: HiddenObject){
    this.objectsFound++;
    this.numberObject(object);
    this.evalState();
  }

  numberObject(object: HiddenObject){
    //@ts-ignore
    this.add.sprite(object.x, object.y, this.counterPrefix+this.objectsFound);
  }

  evalState(){
    if(this.objectsFound < this.objectCount){

    }
    else {
      this.endActivity();
    }
  }

  endActivity(){
    // todo
  }

}
