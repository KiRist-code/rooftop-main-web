import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";
import {
  Compil_container,
  Compil_container_title,
  Compil_album_container,
  Compil_album_picture,
  Compil_album_map,
} from "../components/compilation/albumComponent";
import season_album from "../data/SeasonAlbum.json";
import ep_album from "../data/EPAlbum.json";
import { useRef } from "react";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
  min-height: calc(100% - 60px);
`;

const CompilationHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TextDiv = styled.div`
  text-align: center;
  margin-right: 20px;

  &.Title {
    font-size: 44px;
    font-weight: 600; /*semibold*/
  }

  &.Description {
    padding-top: 1%;
    font-size: 15px;
  }
`;

const ContentWarp = styled.div`
  display: flex;
  width: 100%;
  margin: 1vh;
  align-items: center;
  flex-wrap: wrap;
`;

const Compilation = () => {
  const seasonCompil_album = useRef(season_album);
  const epCompil_album = useRef(ep_album);

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Container_warp>
        <CompilationHeader>
          <TextDiv className="Title">Compilation</TextDiv>
          <TextDiv className="Description">
            - All the compilations that we're doing -
          </TextDiv>
        </CompilationHeader>
        <ContentWarp>
          <Compil_container>
            <Compil_container_title>Season Compilation</Compil_container_title>
            <Compil_album_container>
              {Object.keys(seasonCompil_album.current).map((value: string) => (
                <Compil_album_map>
                  <Compil_album_picture
                    key={
                      seasonCompil_album.current[
                        value as keyof typeof season_album
                      ].id
                    }
                    $background_src={
                      seasonCompil_album.current[
                        value as keyof typeof season_album
                      ].webp_src
                    }
                  />
                  <>{value}</> {/* TODO : edit text size and weight*/}
                </Compil_album_map>
              ))}
            </Compil_album_container>
          </Compil_container>
          <Compil_container>
            <Compil_container_title>
              External Compilation
            </Compil_container_title>
            <Compil_album_container>
              {Object.keys(epCompil_album.current).map((value: string) => (
                <Compil_album_map>
                  <Compil_album_picture
                    key={
                      epCompil_album.current[value as keyof typeof ep_album].id
                    }
                    $background_src={
                      epCompil_album.current[value as keyof typeof ep_album]
                        .webp_src
                    }
                  />
                  <>{value}</> {/* TODO : edit text size and weight*/}
                </Compil_album_map>
              ))}
            </Compil_album_container>
          </Compil_container>
        </ContentWarp>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default Compilation;
