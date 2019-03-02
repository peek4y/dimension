import { BlockContainer } from '../block-container';
import styled from 'styled-components';
import { BlockColorFour } from '../../colors';
import TextInput from './text-input';
import BlockButton from '../block-button';
import ReactSVG from 'react-svg';

const ContactBlockContainer = styled(BlockContainer)``;

const ContactTitleBlock = styled.div`
  text-align: center;
  font-size: 20pt;
  color: #fff;
  margin: 3vh 3vw;
  @media (max-width: 1000px) {
    font-size: 17pt;
  }
  @media (max-width: 380px) {
    font-size: 12pt;
  }
`;

const ContactTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 5vw;
  input,
  textarea {
    margin-top: 20px;
  }
  @media (max-width: 380px) {
    margin-top: 0px;
    input,
    textarea {
      margin-top: 15px;
    }
  }
  @media (max-width: 320px) {
    margin-top: 0px;
    input,
    textarea {
      margin-top: 10px;
    }
  }
`;

const ContactFormButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 20px 0px;
  @media (max-width: 380px) {
    margin: 20px 0px 30px 0px;
  }
  @media (max-width: 320px) {
    margin: 10px 0px 30px 0px;
  }
`;

const SocialBlock = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SocialIcon = styled.a``;

const ContactBlock = () => {
  return (
    <ContactBlockContainer backgroundColor={BlockColorFour}>
      <ContactTitleBlock>hit me up</ContactTitleBlock>
      <ContactTypeContainer>
        <ContactForm name="dim-contact" method="POST" data-netlify="true">
          <TextInput name={'name'} placeholder={'full name'} />
          <TextInput name={'email'} placeholder={'email'} type={'email'} />
          <TextInput
            name={'message'}
            type={'textarea'}
            placeholder={'message...'}
          />
          <ContactFormButtonContainer>
            <BlockButton
              onClick={() => {
                document.forms['dim-contact'].submit();
              }}
            >
              send
            </BlockButton>
          </ContactFormButtonContainer>
        </ContactForm>
      </ContactTypeContainer>
    </ContactBlockContainer>
  );
};

export default ContactBlock;
