import { Data } from "./data";
import { PlainTextBuilder } from "./plain-text-builder";
import { Director } from "./director";
import { XmlBuilder } from "./xml-builder";
import { JsonBuilder } from "./json-builder";

console.log("Builder-2");

const data = new Data("John", 20);

// const builder = new PlainTextBuilder(data);
// const builder = new XmlBuilder(data);
const builder = new JsonBuilder(data);
const director = new Director(builder);

console.log(director.build());
