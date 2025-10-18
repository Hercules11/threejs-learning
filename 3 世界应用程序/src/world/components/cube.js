import { BoxGeometry, Mesh, MeshBasicMaterial } from 'http://127.0.0.1:8080/three/build/three.module.js';

function createCube() {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2);

    // create a default (white) Basic material
    const material = new MeshBasicMaterial({ color: 0x00ff00 });

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    return cube;
}

export { createCube };