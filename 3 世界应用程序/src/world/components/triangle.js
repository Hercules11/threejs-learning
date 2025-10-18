import { BufferGeometry, BufferAttribute, DoubleSide, MeshBasicMaterial, Mesh } from 'http://127.0.0.1:8080/three/build/three.module.js';

function createTriangle() {
    // 缓冲区几何对象
    const geometry = new BufferGeometry();

    // 定义三角形的3个顶点坐标
    const vertices = new Float32Array([
        -1.5, -1.0, 0.5,
        1.5, -1.0, -0.5,
        0.0, 1.5, 0.0
    ])

    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    geometry.computeVertexNormals();

    const material = new MeshBasicMaterial({
        color: 'Violet',  // 注意：color 不需要引号
        wireframe: false, // 注意：是 wireframe，不是 wireFrame
        side: DoubleSide,
    });

    const triangle = new Mesh(geometry, material);

    return triangle; // 🔑 关键：返回创建的对象
}

export { createTriangle };