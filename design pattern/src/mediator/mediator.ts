import { Participant } from "./participant";

export interface Mediator {
    participantChanged(participant: Participant): void;
}