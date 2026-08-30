import { DirectionalLight } from 'http://127.0.0.1:8080/three/build/three.module.js';

function createLights() {
    const light = new DirectionalLight('white', 8);

    light.position.set(10, 10, 10);

    return light;

}

export { createLights };