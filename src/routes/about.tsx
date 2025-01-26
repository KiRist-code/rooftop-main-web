import { styled } from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Contact_warp, Contact_email } from "../components/about/contract";
import {
  Member_ul,
  Member_header,
  Member_title,
  Member_title_describtion,
  Member_warp,
  Member_li,
  Profile,
  Member,
  Name_warp,
  PFP,
} from "../components/about/member";
import rooftopMember from "../data/RooftopMember.json";

const Container_warp = styled.div`
  margin: 40px auto;
  width: 80%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  font-family: "Montserrat Alternates";
  min-height: calc(100% - 60px);
`;

const AboutHeader = styled.h1`
  font-size: 44px;
  font-weight: 600; /*semibold*/
`;

const About_content = styled.div`
  margin: 10px;
  font-family: "Montserrat";
  line-height: 20px;
`;

const Slogan = styled.div`
  margin: 10px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const About = () => {
  /* */

  return (
    <>
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
          <Member_ul>
            {Object.keys(rooftopMember).map((value: string) => (
              <Member_li>
                <PFP>
                  <Profile
                    id="profile"
                    style={{
                      backgroundImage: `url(/images/profiles/${
                        rooftopMember[value as keyof typeof rooftopMember]
                          .profile
                      })`,
                    }}
                  />
                  <a
                    href={
                      rooftopMember[value as keyof typeof rooftopMember].link
                    }
                    style={{
                      marginRight: `20px`,
                    }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </PFP>
                <Member>
                  <Name_warp>
                    <div
                      id="name"
                      style={{
                        fontWeight: `500`,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      id="role"
                      style={{
                        fontSize: `13px`,
                      }}
                    >
                      {rooftopMember[value as keyof typeof rooftopMember].role}
                    </div>
                  </Name_warp>
                  <div
                    id="introduce"
                    style={{
                      fontSize: `13px`,
                      lineHeight: `18px`,
                    }}
                  >
                    {
                      rooftopMember[value as keyof typeof rooftopMember]
                        .introduce
                    }
                  </div>
                </Member>
              </Member_li>
            ))}
          </Member_ul>
        </Member_warp>
      </Container_warp>
      <Footer></Footer>
    </>
  );
};

export default About;
