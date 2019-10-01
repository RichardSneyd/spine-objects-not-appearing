  import Base from './Base';
  import SpineObject from '../objects/SpineObject';

  export class TechDemo extends Base {
    constructor() {
      super('TechDemo');

    }

    init() {

    }


    preload() {
      this.load.setPath('assets/graphics/');
      this.load.spritesheet('logo', 'rise-logo.png', { frameWidth: 192, frameHeight: 114 });

      this.load.setPath('./spine/');

      this.load.spine('monkey', 'goblins-ess.json', 'goblins-ess.atlas', false);

    }

    create() {
      console.log('main menu create');
      let logo = this.add.sprite(this.game.canvas.width / 2, 10, 'logo');
      logo.setOrigin(0.5, 0);
      // this.add.sprite
      let x = this.game.canvas.width / 2;
      let y = this.game.canvas.height / 2;
      /* 
              let alien = this.add.spine(this.game.canvas.width / 2, this.game.canvas.height / 2, 'monkey', 'idle', true);
           //   alien.setAnimation(1, 'jump', true);
               alien.setInteractive();
              console.log(alien.input.hitArea)
              
              alien.on('pointerdown', function(this: any){
                console.log('tap detected on spine obj!');
                alien.setAnimation(0, 'jump', false);
                alien.addAnimation(0, 'idle', true);
              }, this); 
            */

      this.input.on('pointerdown', function (this: TechDemo) {
        this.newActor();
      }, this);
      //  let arse = new SpineGameObject()
    }

    newActor() {
      let monkey = new SpineObject(this, this.input.activePointer.x, this.input.activePointer.y, 'monkey');
      this.children.sortChildrenFlag = true;
      this.children.sort('y');
      console.log(this.children);
    }

  }
