import { MapSite } from "./map-site";

export class Wall extends MapSite {
    constructor() {
        super();
    }
    enter() {
        console.log("You just ran into a wall...");
    }
}