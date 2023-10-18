"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMaze = void 0;
function createMaze(builder) {
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(2);
    builder.buildDoor(1, 2);
    return builder.getMaze();
}
exports.createMaze = createMaze;
//# sourceMappingURL=index.js.map