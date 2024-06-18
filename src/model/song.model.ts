import { Artist } from "./artist.model";

export interface Song {
  name: string;
  artist: Array<Artist>;
  genre: string;
}
