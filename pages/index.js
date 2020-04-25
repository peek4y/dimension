import styled from 'styled-components';
import Wave from 'react-wavify';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const WaveContainer = styled(Container)`
  div {
    height: 100%;
  }
`;

const HeaderContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled(Container)`
  align-items: flex-start;
  justify-content: center;
`;

const Subtitle = styled(Container)`
  font-weight: 100;
  font-size: 17pt;
  flex: none;
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 17pt;
  }
  @media (max-width: 1200px) {
    font-size: 17pt;
  }
  @media (max-width: 600px) {
    font-size: 10pt;
  }
  @media (max-width: 350px) {
    font-size: 10pt;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 25pt;
  letter-spacing: 8px;
  text-transform: uppercase;

  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 25pt;
  }
  @media (max-width: 1200px) {
    font-size: 25pt;
  }
  @media (max-width: 600px) {
    font-size: 15pt;
  }
  @media (max-width: 350px) {
    font-size: 15pt;
  }
  @media (max-width: 320px) {
    font-size: 13pt;
  }
`;

const Bar = styled(Container)`
  width: 1px;
  max-width: 2px;
  background: #000;
  flex: 1;
  height: 60%;
  align-self: center;
  margin: 0em 1.5em;
`;

const AbsoluteSocialContainer = styled.span`
  position: absolute;
  display: inline-flex;
  top: 70%;
  width: 100%;
  justify-content: space-around;
  a {
    color: #fff;
    text-decoration: none;
  }
  font-size: 50pt;
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 50pt;
  }
  @media (max-width: 1200px) {
    font-size: 50pt;
  }
  @media (max-width: 600px) {
    font-size: 30pt;
  }
  @media (max-width: 350px) {
    font-size: 30pt;
  }
`;

const Home = () => {
  return (
    <Container>
      <HeaderContainer>
        <Container style={{ flexDirection: 'row' }}>
          <Bar></Bar>
          <TitleContainer>
            <Title>Gautham</Title>
            <Title>Ramachandran.</Title>
            <Container style={{ marginTop: '1em', flex: 'none', marginRight: '2px' }}>
              <Subtitle>/ Software dev.</Subtitle>
              <Subtitle>/ Language agnostic.</Subtitle>
              <Subtitle>/ FP Enthusiast.</Subtitle>
              <Subtitle>
                / Likes building stuff, breaking stuff, writing bugs, fixing
                them, the usual.
              </Subtitle>
            </Container>
          </TitleContainer>
        </Container>
      </HeaderContainer>
      <WaveContainer>
        <Wave
          fill="#f79902"
          paused={false}
          options={{
            height: 25,
            amplitude: 10,
            speed: 0.5,
            points: 4,
          }}
        />
      </WaveContainer>
      <AbsoluteSocialContainer>
        <a href="https://github.com/peek4y" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/peek4y" target="_blank">
          <AiFillLinkedin />
        </a>
      </AbsoluteSocialContainer>
    </Container>
  );
};

export default Home;
