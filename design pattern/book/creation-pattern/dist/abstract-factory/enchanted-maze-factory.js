"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnchantedMazeFactory = void 0;
const maze_factory_1 = require("./maze-factory");
const maze_1 = require("../maze");
const wall_1 = require("../wall");
const enchanted_room_1 = require("../enchanted-room");
const door_need_spell_1 = require("../door-need-spell");
const spell_1 = require("../spell");
class EnchantedMazeFactory extends maze_factory_1.MazeFactory {
    makeDoor(room1, room2) {
        return new door_need_spell_1.DoorNeedSpell(room1, room2);
    }
    makeMaze() {
        return new maze_1.Maze();
    }
    makeRoom(roomNumber) {
        return new enchanted_room_1.EnchantedRoom(roomNumber, this.castSpell());
    }
    makeWall() {
        return new wall_1.Wall();
    }
    castSpell() {
        return new spell_1.Spell();
    }
}
exports.EnchantedMazeFactory = EnchantedMazeFactory;
//# sourceMappingURL=enchanted-maze-factory.js.map