import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";

const Warp_content = styled.div`
  display: flex;
  font-family: "Montserrat";
  text-align: center;
  height: 90%;
  width: 100%;
`;

const TextBox_404 = styled.div`
  margin: auto;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;
`;

const NotFound = () => {
  return (
    <>
      <Header></Header>
      <Warp_content>
        <TextBox_404>
          <Title>404 Not Found</Title>
          <span>Sry, we didn't find that page.</span>
        </TextBox_404>
      </Warp_content>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
