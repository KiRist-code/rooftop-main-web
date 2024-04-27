import { styled } from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import { GlobalStyle } from "./shared/global-style";

const Wallpaper = styled.img`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <div className="main-wallpaper">
        <p>
          <Wallpaper src="assets/wallpaper/4k_rooftop_webBG.webp" />
        </p>
        <Hover_content>
          <h1>Make music, </h1>
          <h1>Live in music.</h1>
        </Hover_content>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
