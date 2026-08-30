import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
// import { createTriangle } from './components/triangle.js';
// import { createSphere } from './components/sphere.js';
// import { createTorus } from './components/torus.js';
import { createLights } from './components/lights.js';
import { createSquare, createSquareWithIndex } from './components/square.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        // const something = createCube();
        // const something = createSphere()
        // const something = createTriangle();
        // const something = createTorus()
        // const something = createSquare()
        const something = createSquareWithIndex();
        scene.add(something);
        const somethingCopy = createSquareWithIndex()
        somethingCopy.position.set(3, 2, 1); // 做 3d 图形的话，时时刻刻在脑海里面有个 三维坐标系
        scene.add(somethingCopy)

        const light = createLights();

        scene.add(something, light);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        // draw a single frame
        renderer.render(scene, camera);
    }
}

export { World };
