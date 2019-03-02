import styled from 'styled-components';
import ReactSVG from 'react-svg';
import GRLogo from './logo-component';

const PageLoader = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  min-height: 100vh;
  overflow: none;
  position: fixed;
  justify-content: center;
  width: 100vw;
  transition: transform 0.8s 0s, opacity 0.6s 0s;
  &.hide {
    opacity: 0;
    transform: translateY(-100vh);
  }
  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1.5);
      opacity: 0;
      transform: scale(1.5);
    }
  }
`;

const LogoHolder = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  display: flex;
`;

const LogoBlinker = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  background: #d53f3f;
  animation: sk-scaleout 1s infinite ease-in-out;
`;

const Logo = styled.div`
  height: 200px;
  width: 200px;
  background-size: contain;
  position: absolute;
  top: 0;
`;

const PageLoaderBlock = props => {
  return (
    <PageLoader id={props.id}>
      <LogoHolder>
        <LogoBlinker />
        <Logo>
          <GRLogo height={200} width={200} />
        </Logo>
      </LogoHolder>
    </PageLoader>
  );
};

export default PageLoaderBlock;
