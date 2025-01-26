import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";
import { styled } from "styled-components";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
  min-height: calc(100% - 60px);
`;

const ReleaseHeader = styled.div`
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

const Release = () => {
  // const [releaseList, setReleaseList] = useState<Artist>();

  // useEffect(() => {
  //   async function fetchRelease() {
  //     setReleaseList(await getArtistList());
  //   }

  //   fetchRelease();
  // }, [releaseList]);

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Container_warp>
        <ReleaseHeader>
          <TextDiv className="Title">Release</TextDiv>
        </ReleaseHeader>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default Release;
