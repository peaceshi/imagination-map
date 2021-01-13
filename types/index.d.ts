/* eslint-disable @typescript-eslint/no-unused-vars */
import * as DeckTypings from "@danmarshall/deckgl-typings";
declare module "deck.gl" {
  export namespace DeckTypings {}
}

import * as LumaTypings from "@danmarshall/deckgl-typings/luma.gl__core";
declare module "luma.gl" {
  export namespace LumaTypings {}
}

import stook from "stook";
declare module "stook" {
  export interface Key {
    User: string;
    Counter: string;
  }
}
