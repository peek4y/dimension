import { SuperBlockContainer } from '../components/super-block-container';
import { SubBlockContainer } from '../components/sub-block-container';
import IntroBlock from '../components/intro-block';
import ToolsBlock from '../components/tools-block';
// import WorkBlock from '../components/work-block';
import ContactBlock from '../components/contact-block';
const Home = () => {
  return (
    <SuperBlockContainer>
      <SubBlockContainer flexDirection="row">
        <IntroBlock />
        <ToolsBlock />
      </SubBlockContainer>
      <SubBlockContainer flexDirection="row">
        <ContactBlock />
      </SubBlockContainer>
    </SuperBlockContainer>
  );
};

export default Home;
