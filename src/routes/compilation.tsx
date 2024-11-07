import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";
import { Compilation_warpper } from "../components/compilation/albumComponent";

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
  // const seasonCompil_album = useRef(season_album);
  // const epCompil_album = useRef(ep_album);
  // const { isShowPopup, setIsShowPopup } = useState(false);

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
          <Compilation_warpper name={"Season"} /> {/* Season Compilation */}
          <Compilation_warpper name={"External"} /> {/* Season Compilation */}
        </ContentWarp>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default Compilation;
