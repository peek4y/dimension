import styled from 'styled-components';
import { BlockContainer } from './block-container';
import { BlockColorTwo } from '../colors';
import ReactSVG from 'react-svg';

const ToolsBlockContainer = styled(BlockContainer)``;

const ToolsTitleBlock = styled.div`
  text-align: center;
  font-size: 20pt;
  margin: 3vh 3vw;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 17pt;
  }
  @media (max-width: 380px) {
    font-size: 12pt;
  }
`;

const ToolsList = styled(BlockContainer)`
  margin: 0px 4vw;
  justify-content: space-around;
  align-items: center;
  svg {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 1400px) {
    svg {
      height: 80px;
      width: 80px;
    }
  }
  @media (max-width: 1000px) {
    svg {
      height: 60px;
      width: 60px;
    }
  }
`;
const ToolIcon = styled.a`
  cursor: pointer;
`;

const ToolsBlock = () => {
  return (
    <ToolsBlockContainer backgroundColor={BlockColorTwo}>
      <ToolsTitleBlock>some of the tools, i use.</ToolsTitleBlock>
      <ToolsList flexDirection="row">
        <ToolIcon href="https://stackshare.io/git" target="_blank">
          <ReactSVG src="static/dev-icons/git.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/nodejs" target="_blank">
          <ReactSVG src="static/dev-icons/nodejs.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/visual-studio-code" target="_blank">
          <ReactSVG src="static/dev-icons/vs.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/c-sharp" target="_blank">
          <ReactSVG src="static/dev-icons/csharp.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/react" target="_blank">
          <ReactSVG src="static/dev-icons/react.svg" />
        </ToolIcon>
      </ToolsList>
      <ToolsList flexDirection="row">
        <ToolIcon href="https://stackshare.io/postgresql" target="_blank">
          <ReactSVG src="static/dev-icons/postgres.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/docker" target="_blank">
          <ReactSVG src="static/dev-icons/docker.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/typescript" target="_blank">
          <ReactSVG src="static/dev-icons/ts.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/dot-net" target="_blank">
          <ReactSVG src="static/dev-icons/dotnet.svg" />
        </ToolIcon>
        <ToolIcon href="https://stackshare.io/go" target="_blank">
          <ReactSVG src="static/dev-icons/go.svg" />
        </ToolIcon>
      </ToolsList>
    </ToolsBlockContainer>
  );
};

export default ToolsBlock;
