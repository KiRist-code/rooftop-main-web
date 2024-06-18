import { Song } from "./song.model";

export interface Album {
  AlbumID: string;
  songList: Array<Song>;
  releaseDate: string;
  soundcloud: string;
  spotify: string;
  bandcamp: string;
}
