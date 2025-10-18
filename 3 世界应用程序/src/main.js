import { World } from './world/World.js';

// create the main function
function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
    const operation = document.querySelector('.operation-area>button');
    operation.addEventListener('click', () => {

        // 1. Create an instance of the World app
        const world = new World(container);

        // 2. Render the scene
        world.render();
    })

}
// call main to start the app
main();