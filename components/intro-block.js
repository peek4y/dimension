import { BlockColorOne } from '../colors';
import { BlockContainer } from './block-container';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const IntroBaseBlockContainer = styled(BlockContainer)`
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const DisplayPictureBlock = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url(static/images/display-pic.png);
  background-size: contain;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.22);
  @media (max-width: 1400px) {
    width: 80px;
    height: 80px;
  }
  @media (max-height: 640px) {
    margin: 10px 0px 0px 0px;
  }
`;

const HiBlock = styled.div`
  font-size: 25pt;
  margin: 20px 0px 0px 0px;
  @media (max-width: 1400px) {
    font-size: 23pt;
  }
  @media (max-width: 800px) {
    font-size: 17pt;
  }
  @media (max-width: 380px) {
    font-size: 15pt;
  }
  @media (max-height: 640px) {
    margin: 10px 0px 0px 0px;
  }
`;

const IntroDescriptionBlock = styled.div`
  margin: 20px 3vw;
  font-size: 15pt;
  letter-spacing: 1px;
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 13pt;
  }
  @media (max-height: 900px) {
    font-size: 11pt;
  }
  @media (max-width: 800px) {
    font-size: 11pt;
  }
  @media (max-width: 380px) {
    font-size: 9pt;
  }
  @media (max-height: 640px) {
    margin: 10px 3vw;
    letter-spacing: normal;
  }
`;

const SocialBlock = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
const SocialIcon = styled.a`
  cursor: pointer;
  @media (max-width: 1400px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width: 800px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
  @media (max-height: 830px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width: 380px) {
    svg {
      width: 70px;
      height: 70px;
    }
  }
  @media (max-width: 320px) {
    svg {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-height: 640px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

const IntroBlock = () => {
  const IntroTextPartOne = `i'm gautham ramachandran, a senior programmer with eight years of
  industry experience, specializing in developing scalable web and mobile
  applications.`;
  const IntroTextPartTwo = `and also learning to design.`;
  return (
    <IntroBaseBlockContainer backgroundColor={BlockColorOne}>
      <DisplayPictureBlock />
      <HiBlock>hi</HiBlock>
      <IntroDescriptionBlock>
        {IntroTextPartOne}
        <br />
        <br />
        {IntroTextPartTwo}
      </IntroDescriptionBlock>
      <SocialBlock>
        <SocialIcon title="Github" href="https://github.com/peek4y" target="_blank" rel="noopener" alt="">
          <ReactSVG src="static/contact-github.svg" />
        </SocialIcon>
        <SocialIcon title="LinkedIn" href="https://www.linkedin.com/in/peek4y" target="_blank" rel="noopener" alt="">
          <ReactSVG src="static/contact-linkedin.svg" />
        </SocialIcon>
        <SocialIcon title="Resume" href="https://dribbble.com/peek4y" target="_blank" rel="noopener" alt="">
          <ReactSVG src="static/dribbble-ball-icon.svg" />
        </SocialIcon>
        <SocialIcon title="Dribbble" href="static/resume/GauthamRamachandranResume.pdf" target="_blank" rel="noopener" alt="" download="GauthamRamachandranResume.pdf">
          <ReactSVG src="static/resume.svg" />
        </SocialIcon>
      </SocialBlock>
    </IntroBaseBlockContainer>
  );
};

export default IntroBlock;
