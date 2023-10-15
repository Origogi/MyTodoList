import { Data } from "./data";

export abstract class Builder {
    protected constructor(protected data: Data) {
    }

    abstract head() : string;
    abstract body() : string;
    abstract foot() : string;

}