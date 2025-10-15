import { Color, Scene } from 'http://127.0.0.1:8080/three/build/three.module.js';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('#4f4f4f');

    return scene;
}

export { createScene };