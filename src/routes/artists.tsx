import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";
import { Artist } from "../model/artist.model";

const Artists = () => {
  const [artistList, setArtistList] = useState<Artist>();

  useEffect(() => {
    async function fetchArtist() {
      // setArtistList();
    }

    fetchArtist();
  }, [artistList]);

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <div>
        <h1>Artists</h1>
      </div>
      <div></div>
      <Footer></Footer>
    </>
  );
};

export default Artists;
