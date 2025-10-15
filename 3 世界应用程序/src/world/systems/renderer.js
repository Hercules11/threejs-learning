import { WebGLRenderer } from 'http://127.0.0.1:8080/three/build/three.module.js';

function createRenderer() {
    const renderer = new WebGLRenderer();

    return renderer;
}

export { createRenderer };