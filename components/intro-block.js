import { BlockColorOne } from '../colors';
import { BlockContainer } from './block-container';
import styled from 'styled-components';

const IntroBaseBlockContainer = styled(BlockContainer)`
  justify-content: center;
  align-items: center;
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
  @media (max-width: 1000px) {
    font-size: 23pt;
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
  @media (max-width: 1000px) {
    font-size: 13pt;
  }
  @media (max-height: 640px) {
    margin: 10px 3vw;
    letter-spacing: normal;
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
    </IntroBaseBlockContainer>
  );
};

export default IntroBlock;
