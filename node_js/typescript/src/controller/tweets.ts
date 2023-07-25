import { Request, Response } from "express";
import * as tweetRepository from "../data/tweets";

export async function getTweets(req : Request, res : Response) : Promise<void> {
    const  tweets = await tweetRepository.getAll();
    res.status(200).json(tweets);
}