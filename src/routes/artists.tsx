import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";
import { Artist } from "../model/artist.model";
import { getArtistList } from "../service/artists.service";
import { styled } from "styled-components";
import {
  Member,
  Member_li,
  Member_ul,
  Name_warp,
  Profile,
} from "../components/about/member";
import featuredArtists from "../data/FeaturedArtists.json";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
  min-height: calc(100% - 60px);
`;

const ArtistHeader = styled.div`
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

  &.SubTitle {
    font-size: 30px;
    font-weight: 500;
  }

  &.Description {
    padding-top: 1%;
    font-size: 15px;
  }
`;

const Artists_warp = styled.div`
  margin: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const Artists_subHead = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Artists = () => {
  const [artistList, setArtistList] = useState<Artist>();

  useEffect(() => {
    async function fetchArtist() {
      setArtistList(await getArtistList());
    }

    fetchArtist();
  }, [artistList]);

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Container_warp>
        <ArtistHeader>
          <TextDiv className="Title">Artists</TextDiv>
        </ArtistHeader>
        <Artists_warp>
          <Artists_subHead>
            <TextDiv className="SubTitle">Featured Artist</TextDiv>
            <TextDiv className="Description">
              Rooftop's Featured Artists
            </TextDiv>
          </Artists_subHead>
          <Member_ul>
            {Object.keys(featuredArtists).map((value: string) => (
              <Member_li>
                <a
                  href={
                    featuredArtists[value as keyof typeof featuredArtists].link
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  <Profile
                    id="profile"
                    style={{
                      backgroundImage: `url(/images/profiles/${
                        featuredArtists[value as keyof typeof featuredArtists]
                          .profile
                      })`,
                    }}
                  />
                </a>
                <Member>
                  <Name_warp>
                    <div
                      id="name"
                      style={{
                        fontWeight: `500`,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      id="role"
                      style={{
                        fontSize: `13px`,
                      }}
                    >
                      {
                        featuredArtists[value as keyof typeof featuredArtists]
                          .role
                      }
                    </div>
                  </Name_warp>
                  <div
                    id="introduce"
                    style={{
                      fontSize: `13px`,
                      lineHeight: `18px`,
                    }}
                  >
                    {
                      featuredArtists[value as keyof typeof featuredArtists]
                        .introduce
                    }
                  </div>
                </Member>
              </Member_li>
            ))}
          </Member_ul>
        </Artists_warp>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default Artists;
