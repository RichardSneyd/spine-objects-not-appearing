///<reference path='../types/spine.d.ts' />
///<reference path='../types/phaser.d.ts' />
///<reference path='../types/spine.plugin.d.ts' />

import * as _ from 'lodash';
import FindAndCount_Polar from './scenes/1_FindAndCount_Polar';

var config: Phaser.Types.Core.GameConfig = {
  title: "demo-class",
  type: Phaser.WEBGL,
  scene: [new FindAndCount_Polar('k1_demo_polar_a1_i1')],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
    parent: 'phaser-game'
  }

}
var game = new Phaser.Game(config);



