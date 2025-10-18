import { TorusGeometry, MeshBasicMaterial, Mesh } from 'http://127.0.0.1:8080/three/build/three.module.js'

function createTorus() {
    // const geometry = new TorusGeometry(10, 3, 16, 100); 不知道为什么有参数就不能显示
    const geometry = new TorusGeometry();
    const material = new MeshBasicMaterial({ color: 0xffff00 });
    const torus = new Mesh(geometry, material);

    return torus;
}

export {
    createTorus
}