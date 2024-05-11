import Footer from "../components/footer";
import Header from "../components/header";
import { GlobalStyle } from "../shared/global-style";

const Compilation = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <div>
        <h1>Compilation</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Compilation;
