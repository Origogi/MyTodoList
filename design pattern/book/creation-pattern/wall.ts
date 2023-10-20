import { MapSite } from "./map-site";

export class Wall extends MapSite {
    constructor() {
        super();
    }

    clone(): Wall {
        return new Wall();
    }

    enter() {
        console.log("You just ran into a wall...");
    }
}