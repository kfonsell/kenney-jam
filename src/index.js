import 'pixi';
import 'p2';
import 'phaser'
import { STATES, VIEWPORT } from 'constants';

import Boot from 'states/boot';
import Main from 'states/main';
import Title from 'states/title';

const config = {
  width: VIEWPORT.WIDTH,
  height: VIEWPORT.HEIGHT,
  renderer: Phaser.AUTO,
  parent: '',
  transparent: false,
  antialias: true,
  physicsConfig: { p2: true },
};

const game = new Phaser.Game(config);

game.state.add(STATES.BOOT, Boot);
game.state.add(STATES.TITLE, Title);
game.state.add(STATES.MAIN, Main);

game.state.start(STATES.BOOT);
