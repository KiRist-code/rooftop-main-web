import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
  min-height: calc(100% - 60px);
`;

const CompilationHeader = styled.h1`
  font-size: 44px;
  font-weight: 600; /*semibold*/
`;

const Compilation = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Container_warp>
        <CompilationHeader>Compilation</CompilationHeader>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default Compilation;
