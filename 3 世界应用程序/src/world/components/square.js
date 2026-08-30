import { BufferAttribute, BufferGeometry, MeshBasicMaterial, Mesh } from 'http://127.0.0.1:8080/three/build/three.module.js'

function createSquare() {
    const geometry = new BufferGeometry();
    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    const vertices = new Float32Array([
        -1.0, -1.0, 1.0, // v0
        1.0, -1.0, 1.0, // v1
        1.0, 1.0, 1.0, // v2

        1.0, 1.0, 1.0, // v3
        -1.0, 1.0, 1.0, // v4
        -1.0, -1.0, 1.0  // v5
    ]);

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));
    const material = new MeshBasicMaterial({ color: 0x4f4f4f });
    const square = new Mesh(geometry, material);

    return square;
}

function createSquareWithIndex() {
    const geometry = new BufferGeometry();

    const vertices = new Float32Array([
        -1.0, -1.0, 1.0, // v0
        1.0, -1.0, 1.0, // v1
        1.0, 1.0, 1.0, // v2
        -1.0, 1.0, 1.0, // v3
    ]);

    const indices = [
        0, 1, 2,
        2, 3, 0,
    ];

    geometry.setIndex(indices);
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));

    const material = new MeshBasicMaterial({ color: 0x4f4f4f });
    const square = new Mesh(geometry, material);

    return square;
}

export { createSquare, createSquareWithIndex }