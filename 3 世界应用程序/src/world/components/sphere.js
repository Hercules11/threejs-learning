import { SphereGeometry, MeshBasicMaterial, Mesh } from 'http://127.0.0.1:8080/three/build/three.module.js'

function createSphere() {
    // const geometry = new SphereGeometry(15, 32, 16);
    const geometry = new SphereGeometry();
    const material = new MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new Mesh(geometry, material);

    return sphere
}

export { createSphere }