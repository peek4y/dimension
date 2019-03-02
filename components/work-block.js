import { BlockColorThree } from '../colors';
import { BlockContainer } from './block-container';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const WorkBlockContainer = styled(BlockContainer)``;

const WorkTitleBlock = styled.div`
  text-align: center;
  font-size: 20pt;
  margin: 3vh 3vw;
  @media (max-width: 1000px) {
    font-size: 17pt;
  }
  @media (max-width: 380px) {
    font-size: 12pt;
  }
`;

const WorkItemBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-top: 2vh;
  @media screen and (max-width: 1400px) {
    svg {
      height: 180px;
      width: 180px;
    }
  }
  @media screen and (max-width: 380px) {
    svg {
      height: 150px;
      width: 150px;
    }
  }
`;

const PSBlock = styled.div`
  text-align: center;
  font-size: 8pt;
  margin: auto 3vw 10px 3vw;
  @media screen and (max-width: 1400px) {
    margin-bottom: 0px;
  }
  p {
    line-height: 30px;
  }
`;

const PSBlockHighlightText = styled.a`
  background: #241f4d;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  margin: 0px 10px;
  text-decoration: none;
`;

const WorkBlock = () => {
  return (
    <WorkBlockContainer backgroundColor={BlockColorThree}>
      <WorkTitleBlock>stuff i'm working on, currently.</WorkTitleBlock>
      <WorkItemBlock>
        <a href="https://github.com/deftia/falkonjs" target="_blank" rel="noopener">
          <ReactSVG src="static/falkon.svg" />
        </a>
      </WorkItemBlock>
      <PSBlock>
        <p>
          psst..btw, i currently work full-time at 
          <PSBlockHighlightText href="https://salesforce.com" target="_blank" rel="noopener">
            salesforce
          </PSBlockHighlightText>
        </p>
      </PSBlock>
    </WorkBlockContainer>
  );
};

export default WorkBlock;
