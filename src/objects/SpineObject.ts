///<reference path= '../../types/phaser3-spine-plugin.d.ts' />

export default class SpineObject {
    spine: SpineGameObject;
    parent: Phaser.GameObjects.Container;
    scene: Phaser.Scene;
    track: number = 1;
    constructor(scene: Phaser.Scene, x: number, y: number, key: string, container: Phaser.GameObjects.Container, animation?: string, loop?: boolean) {
        this.scene = scene;
        this.parent = container;
        this.spine = scene.add.spine(x, y, key);
      //  this.spine = scene.make.spine({ scene, x, y, key, animation, loop });
        this.spine.setInteractive(this.spine.getBounds());
        this.changeSkin('default');
        // @ts-ignore
        console.log('should see ' + key);
        console.log(this.scene.sys.displayList.getAll());

        // @ts-ignore
     //   this.parent.add(this.spine);

        //console.log(container);
    }

    reactToPointer(this: SpineObject) {
        /*
        if (this.spine.skeleton.skin.name == 'goblin') {
            this.changeSkin('goblingirl');
        }
        else {
            this.changeSkin('goblin');
        }
        let dir = Phaser.Math.RND.integerInRange(-1, 1);
        if (dir == -1) {
            this.spine.scaleX *= dir;
        }
        this.spine.setAnimation(this.track, 'walk', false);
        this.spine.addAnimation(this.track, 'idle', true, 0);
        this.spine.setToSetupPose();
        this.spine.setAnimation(this.track, 'walk', false);
        this.spine.addAnimation(this.track, 'idle', true); */
    }

    public getAttachments() {
        return this.spine.skeleton.skin.attachments;
    }


    public getSlots() {
        return this.spine.skeleton.slots;
    }

    public changeSkin(skinName: string) {
        // @ts-ignore
        this.spine.setSkin(null);
        // @ts-ignore
        this.spine.setSkinByName(skinName);
    }

}
