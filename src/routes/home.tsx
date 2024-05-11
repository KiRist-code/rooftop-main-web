import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import Wallpaper from "../components/main/wallpaper";

const Content_warp = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Hover_content = styled.div`
  position: absolute;
  top: 40vh;
  right: 3%;
  font-size: 5vw;
  color: white;
  z-index: 2;
  text-align: right;
  font-family: "Montserrat";
  font-weight: 600;
  text-shadow: 0px 0px 70px gray;
`;

export default function Home() {
  return (
    <>
      <Header></Header>
      <Content_warp>
        <Wallpaper src="assets/wallpaper/4k_rooftop_webBG.webp" />
        <Hover_content>
          <h1>Make music, </h1>
          <h1>Live in music.</h1>
        </Hover_content>
      </Content_warp>
      <Footer></Footer>
    </>
  );
}
