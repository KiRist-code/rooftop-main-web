import styled from "styled-components";

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

export {
  Compil_container,
  Compil_container_title,
  Compil_album_container,
  Compil_album_map,
  Compil_album_picture,
};
