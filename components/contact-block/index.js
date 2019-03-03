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
  input,
  textarea {
    margin-top: 20px;
  }
  @media (max-width: 1400px) {
    input,
    textarea {
      margin-top: 15px;
    }
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
  @media (max-width: 1400px) {
    margin: 10px 0px 30px 0px;
  }
  @media (max-width: 380px) {
    margin: 20px 0px 30px 0px;
  }
  @media (max-width: 320px) {
    margin: 10px 0px 30px 0px;
  }
`;

const HiddenSubmit = styled.input`
  display: none;
`;

const ContactBlock = () => {
  return (
    <ContactBlockContainer backgroundColor={BlockColorFour}>
      <ContactTitleBlock>hit me up</ContactTitleBlock>
      <ContactTypeContainer>
        <ContactForm
          name="contact"
          method="POST"
          action="https://formspree.io/gautham2r@gmail.com"
        >
          <TextInput name={'name'} placeholder={'full name'} type={'text'} />
          <TextInput name={'_replyto'} placeholder={'email'} type={'email'} />
          <TextInput
            name={'message'}
            type={'textarea'}
            placeholder={'message...'}
          />
          <ContactFormButtonContainer>
            <BlockButton
              onClick={() => {
                document.forms['contact'].submit();
              }}
            >
              send
            </BlockButton>
          </ContactFormButtonContainer>
          <HiddenSubmit type={'submit'} />
        </ContactForm>
      </ContactTypeContainer>
    </ContactBlockContainer>
  );
};

export default ContactBlock;
