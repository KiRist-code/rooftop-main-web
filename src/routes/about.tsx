import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Contact_warp, Contact_email } from "../components/about/contract";
import { GlobalStyle } from "../shared/global-style";
import { Member, Member_header, Member_title, Member_title_describtion, Member_warp, Memberlist } from "../components/about/member";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
`;

const AboutHeader = styled.h1`
  font-size: 44px;
  font-weight: 600; /*semibold*/
`;

const About_content = styled.div`
  margin: 10px;
`;

const Slogan = styled.div`
  margin: 10px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const About = () => {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Container_warp>
        <AboutHeader>About</AboutHeader>
        <About_content>
          Rooftop Official Label is a Music Label which is aiming to produce
          many unique artists. In Feburary 2022, This label started with the
          first compilation, “Recall of Winter” and now we made a lot of albums
          which are getting known to aboard like “Retro Fiesta”, “Memories of
          Summer” etc.
        </About_content>
        <Slogan>We make our music and live in our music world.</Slogan>
        <Contact_warp>
          Contact
          <Contact_email>rftpofficial@proton.me</Contact_email>
        </Contact_warp>
        <Member_warp>
          <Member_header>
            <Member_title>member</Member_title>
            <Member_title_describtion>
              We work. In Rooftop.
            </Member_title_describtion>
          </Member_header>
          <Memberlist>
            <Member>KiRist</Member>
          </Memberlist>
        </Member_warp>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default About;
