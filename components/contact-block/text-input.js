import styled from 'styled-components';

const TextField = styled.input`
  border-radius: 10px;
  height: 20px;
  padding: 15px;
  width: 263px;
  outline: none;
  border: none;
  font-family: 'Major Mono Display', monospace;
  text-transform: lowercase;
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  height: 60px;
  padding: 15px;
  width: 263px;
  outline: none;
  border: none;
  font-family: 'Major Mono Display', monospace;
  text-transform: lowercase;
`;

const TextInput = props => {
  return props.type === 'textarea' ? (
    <TextArea {...props} />
  ) : (
    <TextField {...props} />
  );
};

export default TextInput;
