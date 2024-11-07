import { useRef, useState } from "react";
import styled from "styled-components";
import season_album from "../../data/SeasonAlbum.json";
import ep_album from "../../data/EPAlbum.json";
import { Pop_up_info } from "./popup";

const Compil_container = styled.div`
  display: flex;
  align-items: left;
  text-align: left;
  flex-direction: column;
  width: 100vw;
  height: 300px;
  margin-bottom: 20px;
  font-family: "Montserrat";
`;

const Compil_container_title = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const Compil_album_container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Compil_album_map = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2%;
`;

const Compil_album_picture = styled.li<{ $background_src: string }>`
  width: 200px;
  height: 200px;
  border-radius: 5%;
  margin-bottom: 10px;
  background-image: url(${(props) => props.$background_src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Compil_album_text = styled.span`
  font-size: 13px;
  font-weight: 400;
`;

const Compilation_warpper = (props: { name: string }) => {
  const seasonCompil_album = useRef(season_album);
  const epCompil_album = useRef(ep_album);
  const [isShowPopup, setShowPopup] = useState(false);

  return (
    <>
      <Compil_container>
        <Compil_container_title>
          {props.name} Compilation
        </Compil_container_title>
        {props.name == "Season" ? (
          // Season Compilation Area
          <Compil_album_container>
            {Object.keys(seasonCompil_album.current).map((value: string) => (
              <>
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
                    onClick={() => {
                      setShowPopup(true);
                    }}
                  />
                  <Compil_album_text>{value}</Compil_album_text>
                </Compil_album_map>
                {isShowPopup && <Pop_up_info></Pop_up_info>}
              </>
            ))}
          </Compil_album_container>
        ) : (
          // External Compilation Area
          <Compil_album_container>
            {Object.keys(epCompil_album.current).map((value: string) => (
              <>
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
                  <Compil_album_text>{value}</Compil_album_text>
                </Compil_album_map>
                {isShowPopup && <Pop_up_info></Pop_up_info>}
              </>
            ))}
          </Compil_album_container>
        )}
      </Compil_container>
    </>
  );
};

export { Compilation_warpper };
