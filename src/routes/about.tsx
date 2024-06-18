import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <div>
        <h1>About</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
