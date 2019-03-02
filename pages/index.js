import { SuperBlockContainer } from '../components/super-block-container';
import { BlockContainer } from '../components/block-container';
import { SubBlockContainer } from '../components/sub-block-container';
import { BlockColorThree, BlockColorFour } from '../colors';
import IntroBlock from '../components/intro-block';
import ToolsBlock from '../components/tools-block';
const Home = () => {
  return (
    <SuperBlockContainer>
      <SubBlockContainer flexDirection="row">
        <IntroBlock />
        <ToolsBlock />
      </SubBlockContainer>
      <SubBlockContainer flexDirection="row">
        <BlockContainer backgroundColor={BlockColorThree} />
        <BlockContainer backgroundColor={BlockColorFour} />
      </SubBlockContainer>
    </SuperBlockContainer>
  );
};

export default Home;
