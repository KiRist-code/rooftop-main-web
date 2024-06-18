import { Artist } from "../model/artist.model";

export async function getArtistList(): Promise<Artist> {
  const url: string = ``;
  return fetch(url, {})
    .then((res) => res.json())
    .then((res) => res.artistList);
}
