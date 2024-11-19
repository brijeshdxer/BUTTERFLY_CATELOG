import { Observable } from '@nativescript/core';
import { Butterfly } from '../models/butterfly';

export class ButterflyDetailViewModel extends Observable {
    private _butterfly: Butterfly;

    constructor(butterfly: Butterfly) {
        super();
        this._butterfly = butterfly;
    }

    get butterfly(): Butterfly {
        return this._butterfly;
    }
}