"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const map_site_1 = require("./map-site");
class Wall extends map_site_1.MapSite {
    constructor() {
        super();
    }
    enter() {
        console.log("You just ran into a wall...");
    }
}
exports.Wall = Wall;
//# sourceMappingURL=wall.js.map